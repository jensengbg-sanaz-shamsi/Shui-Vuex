const { Router } = require('express');
const { db } = require('./db');
const router = new Router();
const jwt = require('jsonwebtoken');
const shortid = require('shortid');
const CryptoJS = require('crypto-js');

router.get('/', (req, res) => {
    const token = req.headers['authorization'].split(' ')[1];
    try {
        const verified_user = jwt.verify(token, process.env.JWT_KEY)
        let users = db.get('users').find({ uuid: verified_user.uuid }).value()

        const filterFollowHash = (flows) => {
            const filterHash = flows.hashtags.filter((hashtag) =>
                users.tags.includes(hashtag)
            )
            return filterHash.length > 0
        }

        if (users.tags.length > 0) {

            let flows = db.get('flows').filter(filterFollowHash).value()
            res.status(200).send(flows)
        } else {
            let flows = db.get('flows').value()
            res.status(200).send(flows)
        }
    } catch (err) {
        res.status(404).send('Oppsssss!')
    }
})


router.post('/', (req, res) => {
    let token = req.headers['authorization'].split(' ')[1];
    try {
        const verified_user = jwt.verify(token, process.env.JWT_KEY)
        let userhash = db.get('users').find({ uuid: verified_user.uuid }).get('tags').push(...req.body.hashtags).write()

        const user = db.get('users').find({ uuid: verified_user.uuid }).value();

        let newFlow = {
            flowID: shortid.generate(),
            date: new Date(),
            hashtags: req.body.hashtags,
            info: CryptoJS.AES.encrypt(req.body.info, process.env.PUBLIC_KEY).toString(),
            owner: user.username
        };

        console.log('date',newFlow)

        db.get('flows').push(newFlow).write()
        res.status(200).send('Flow added!')
    } catch (err) {
        res.status(404).send('Oooopsss!');
        console.log(err)
    }
});

module.exports = router;
