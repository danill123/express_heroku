const router = require('express').Router();
const cors = require('cors');

const users = require("./user");

// routes
router.use('/users', users);
// router.use('/task, ')

module.exports = router