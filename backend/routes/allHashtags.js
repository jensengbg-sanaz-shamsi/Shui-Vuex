const { Router } = require('express');
const { db } = require('./db');
const router = new Router();

router.get('/', (req, res) => {
    try {
        const flows = db.get('flows')
        const hashtags = flows.filter('hashtag')
        console.log('hashtag', hashtags)
        res.send(hashtags);
    } catch {
        res.status(400).send('no hashtags today')
    }
}); 

module.exports = router;