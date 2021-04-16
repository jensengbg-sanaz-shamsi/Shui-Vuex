const { Router } = require('express');
const { db } = require('./db');
const router = new Router();
const jwt = require('jsonwebtoken');

router.get('/', (req, res) => {
    const token = req.headers['authorization'].split(' ')[1];

    try {
        const verified_user = jwt.verify(token, process.env.JWT_KEY);
        const user = db.get('users').find({ uuid: verified_user.uuid }).value();

        res.send(user.tags)
    } catch {
        res.status(400).send('OJJJ')
    }
});

router.post('/', async (req, res) => {
    const token = req.headers['authorization'].split(' ')[1]
    try {
        const verified_user = jwt.verify(token, process.env.JWT_KEY)

        const users = db.get('users')
            .find({ uuid: verified_user.uuid })
            .get('tags')
            .push(req.body.tags)
            .write()
        
        console.log('userhashtag',users)

        res.send(users.tags)
    } catch (err) {
        console.log(err)
        res.status(400).send('whops')
    }
})

router.post('/remove', async (req, res) => {
    const token = req.headers['authorization'].split(' ')[1];

    try {
        const verified_user = jwt.verify(token, process.env.JWT_KEY);
        let user = await db.get('users')
            .find({ uuid: verified_user.uuid })
            .get('tags').pullAll(req.body.tags).write()

        res.status(200).send(user)
    } catch (error) {
        console.log(error)
        res.status(400).send('error')
    }
})

module.exports = router;