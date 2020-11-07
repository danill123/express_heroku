const router = require('express').Router()
const auth = require("../../controllers/auth");

router.get('/', (req, res, next) => {
    // stimulate async operation for improving performance
    setImmediate(function () {
        try {
            res.status(200).send({message: " Welcome, if you want more action please contact developer ", status:200})
        } catch (e) {
            res.status(400).send('Internal server error')
        }
    })
})

router.post('/auth', (req, res, next) => {
    auth.auth(req, res);
})


module.exports = router;