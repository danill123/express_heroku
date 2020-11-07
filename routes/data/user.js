const router = require("express").Router()
const user = require("../../controllers/users");

router.get('/', (req, res, next) => {
    user.list(req, res)
})

router.get('/delete/:id', (req, res, next) => {
    user.deletebyid(req, res)
})

router.get('/byId/:id', (req, res, next) => {
    user.detail(req, res)
})

router.post('/insert', (req, res, next) => {
    user.create(req, res)
})

router.post('/update', (req, res, next) => {
    user.update(req, res)
})


module.exports = router;