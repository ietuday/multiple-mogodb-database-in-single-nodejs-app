const router = require('express').Router();
const User = require('../../models/userSchema');
const Customer = require('../../models/customerSchema');

router.get('/users', (req, res, next) => {
    // return res.json({ data: "no data found" })
    Customer.find({}).populate("name", "", User).exec((err, resp) => {
        return res.send(resp);
    })
})

router.post('/users/store', function (req, res, next) {
    var user = new User();

    user.title = Math.random();
    user.author = Math.random();
    user.body = Math.random();
    user.save().then((savedUser) => {
        // return res.send(savedUser);
        const Customer1 = new Customer({
            customerName: 'Akshay',
            body: "Dighe",
            name: savedUser._id    // assign the _id from the person
        });

        Customer1.save(function (err, cus) {
            if (err) return handleError(err);
            // thats it!
            return res.send(cus);
        });

    }).catch(next);
});

module.exports = router;