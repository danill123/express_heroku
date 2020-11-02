const router = require('express').Router()
const cors = require('cors')

// cors middleware
router.use(cors())

router.get('/', (req, res, next) => {
    // stimulate async operation for improving performance
    setImmediate(function () {
        try {
            res.send({message: " Welcome, if you want more action please contact developer ", status:200})
        } catch (e) {
            res.status(400).send('Invalid JSON string')
        }
    })
})

module.exports = router;