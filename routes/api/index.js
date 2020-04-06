var router = require('express').Router();

router.use('/', require('./user'));
router.use('/', require('./customer'));

module.exports = router;