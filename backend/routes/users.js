const { Router } = require('express');
const { db } = require('./db');
const shortid = require('shortid');
const bcrypt = require('bcrypt');
const CryptoJS = require('crypto-js');
const jwt = require('jsonwebtoken');
const router = new Router();

router.post('/create', async (req, res) => {
    if (req.body.username && req.body.password) {
        const HASHED_PW = await bcrypt.hash(req.body.password, 10);

        const USER_KEY = shortid.generate()
        const USER_KEY_ENCRYPTED = CryptoJS.AES.encrypt(USER_KEY, process.env.SECRET_KEY).toString();

        let newUser = {
            uuid: shortid.generate(),
            username: req.body.username,
            password: HASHED_PW,
            userkey: USER_KEY_ENCRYPTED,
            tags: []
        };

        let userExist = db.get('users').find({username: req.body.username}).value()
        
        if(!userExist) {
            db.get('users').push(newUser).write();
            res.status(200).send('user registered');
        } else {
            res.status(400).send('This user/name already exist');
        }        
    } else {
        res.status(400).send('Username or password is incorrect');
    }
});


router.delete('/delete', (req, res) => {
    const token = req.headers['authorization'].split(' ')[1];

    try {
        const verified_user = jwt.verify(token, process.env.JWT_KEY);
        db.get('flows').filter({ owner: CryptoJS.SHA3(verified_user.uuid).toString() }).forEach((user) => { user.username = 'Anonymous' }).write();

        db.get('users').remove({ uuid: verified_user.uuid }).write();
        res.status(200).send('user is logged in')
    } catch {
        res.status(400).send('user is no longer exsit')
    }
})


module.exports = router;