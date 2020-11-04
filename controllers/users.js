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

exports.update = async(req, res) => {

    let id = req.body.id;
    let name = req.body.name;
    let address = req.body.address;
    let company = req.body.company;
    let jobs = req.body.jobs;
    let gender = req.body.gender;
    let email = req.body.email;

    if(!id || !name || !address || !company || !jobs || !gender || !email) {
        res.status(400).send({message : " Please Complete your parameter"})
    } else {
        try {
            await User.findByIdAndUpdate({_id: id}, {
                "name" : name,
                "address" : address,
                "company" : company,
                "jobs" : jobs,
                "gender" : gender,
                "email" : email 
            })
            res.status(200).send({ message: " Successfully update data", status:200})
        } catch (error) {
            res.status(500).send({ message: "500 Internal Server Error", status: 400})
        }
    }

}

exports.list = async(req, res) => {
    try {
        let data = await User.find({})
        res.status(200).send({ data: data, status: 200 })
    } catch (error) {
        res.status(500).send({ message: ' Unable to retreiving data ', status: 400 })
    }
}

exports.deletebyid = async(req, res) => {
    let id = req.params.id;
    if(!id) {
        res.status(200).send({ message: ' Parameter not complete ' })
    } else {
        try {
            await User.deleteOne({_id: id})
            res.status(200).send({ data: ' Success delete data', status: 200});
        } catch (error) {
            res.status(400).send({ data: ' Error or id not found', status: 400})
        }
    }
}