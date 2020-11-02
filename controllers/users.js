const User = require("../models/user");

exports.create = async(req, res) => {
    let newUser = new User(req.body);
    try {
        await newUser.save();
        res.status(200).send({ message: ' Success saving data to database', status: 200 })
    } catch (error) {
        res.status(400).send({ message: ' Unable to saving data ', status: 400 })
    }
}

exports.list = async(req, res) => {
    try {
        let data = await User.find({})
        res.status(200).send({ data: data, status: 200 })
    } catch (error) {
        res.status(400).send({ message: ' Unable to retreiving data ', status: 400 })
    }
}