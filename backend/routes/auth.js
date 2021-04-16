const { Router } = require('express');
const { db } = require('./db');
const bcrypt = require('bcrypt');
const CryptoJS = require('crypto-js');
const jwt = require('jsonwebtoken');

const router = new Router();


router.post('/login', async (req, res) => {

    // does user exist
    let user = db
    .get('users')
    .find({ username: req.body.username })
    .value()
    
    if(user){
        const valid = await bcrypt.compare(req.body.password, user.password)

        if(valid){
        
            const bytes = CryptoJS.AES.decrypt(user.userkey, process.env.SECRET);
            const DECRYPTED_USER_KEY = bytes.toString(CryptoJS.enc.Utf8);
            
            const token = jwt.sign({ uuid: user.uuid }, process.env.JWT_KEY);
            console.log('token', token);

            res.status(200).send({
                token: token,
                userkey: DECRYPTED_USER_KEY
            });

        } else {
            res.status(403).send('No data registered!');
        }

    } else {
        res.status(400).send('Whoopsie!');
    }

})


module.exports = router;