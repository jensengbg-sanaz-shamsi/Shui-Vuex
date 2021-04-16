const { Router } = require('express');
const { db } = require('./db');
const bcrypt = require('bcrypt');
const shortid = require('shortid');
const jwt = require('jsonwebtoken');
const CryptoJS = require('crypto-js');

const router = new Router();

router.post('/', async (req, res) => {
    
    if(req.body.username && req.body.password) { 
        const HASHED_PW = await bcrypt.hash(req.body.password, 10);
        const USER_KEY = process.env.PUBLIC_KEY;
        
        const ENCRYPTED_USERKEY = CryptoJS.AES.encrypt(USER_KEY, process.env.SECRET).toString();

        let user = {
            uuid: shortid.generate(),
            username: req.body.username,
            password: HASHED_PW,
            userkey: ENCRYPTED_USERKEY,
            tags: []
        }

        let existingUser = db.get('users').find({username: req.body.username}).value();
        if (!existingUser) {
            db.get('users').push(user).write();
            return res.status(201).send('user ok')
        } else {
            res.status(409).send('user already exitst')
        }
    }
})

router.delete('/', (req, res) => {
    const token = req.headers['authorization'].split(' ')[1];
    try {
        const verified_user = jwt.verify(token, process.env.JWT_KEY)
        
        let findUser =  db.get('users').find({uuid: verified_user.uuid}).value();
        
        db.get('flows').filter({ owner: findUser.username})
        .forEach((flows) => {flows.owner = 'Anonymous';}).write();
        
        db.get('users').remove({uuid: verified_user.uuid}).write();
        res.status(201).send('user deleted!');

    } catch {
        res.status(400).send('not deleted?');
    }
})

module.exports = router;