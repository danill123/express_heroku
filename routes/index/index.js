const router = require('express').Router()
const cors = require('cors')

// cors middleware
router.use(cors())

router.get('/', (req, res, next) => {
    res.send({message: " Welcome, if you want more action please contact developer ", status:200})
})

module.exports = router;