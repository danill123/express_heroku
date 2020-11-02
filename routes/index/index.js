const router = require('express').Router()
const cors = require('cors')
const user = require("../../controllers/users");

// cors middleware
router.use(cors())

router.get('/', (req, res, next) => {
    // stimulate async operation for improving performance
    /*
    setImmediate(function () {
        try {
            res.send({message: " Welcome, if you want more action please contact developer ", status:200})
        } catch (e) {
            res.status(400).send('Internal server error')
        }
    })
    */
    user.list(req, res)
})

router.post('/', (req, res, next) => {
    user.create(req, res)
})

module.exports = router;