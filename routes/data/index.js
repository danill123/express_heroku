const router = require('express').Router();

const users = require("./user");

// routes
router.use('/users', users);
// router.use('/task, ')

module.exports = router