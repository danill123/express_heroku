const router = require("express").Router()
const cors = require("cors");
const user = require("../../controllers/users");

router.get('/', (req, res, next) => {
    user.list(req, res)
})

router.get('/delete/:id', (req, res, next) => {
    user.deletebyid(req, res)
})

router.post('/insert', (req, res, next) => {
    user.create(req, res)
})

router.post('/update', (req, res, next) => {
    user.update(req, res)
})


module.exports = router;