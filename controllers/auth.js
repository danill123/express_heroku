const User = require("../models/user")
const bcrypt = require('bcrypt')

exports.auth = async(req, res) => {
    try {
        if(!req.body.email || !req.body.password) {
            res.status(400).send({message: 'Parameter not complete'})
        } else {
            let dat = await User.findOne({email: req.body.email})
            let verify = await bcrypt.compare(req.body.password, dat["password"]);
            if(verify) {
                res.status(200).send({message: 'Authentication Success', auth: true, status: 200})
            } else {
                res.status(200).send({message: 'Authentication failed', auth: false, status: 200})
            }
        }
    } catch (error) {
        res.status(500).send({message: 'internal'})
    }
}