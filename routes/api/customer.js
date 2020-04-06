const mongoose = require('mongoose');
const router = require('express').Router();
const User = mongoose.model('User');

router.get('/users', (req, res, next) => {
    return res.json({ data: "no data found" })
})


router.post('/users/store', function (req, res, next) {
    var user = new User();

    user.title = Math.random();
    user.author = Math.random();
    user.body = Math.random();
    user.save().then((savedUser) => {
        return res.send(savedUser);
    }).catch(next);
});

module.exports = router;