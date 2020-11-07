const User = require("../models/user")
const bcrypt = require('bcrypt')

exports.create = async(req, res) => {
    let data = req.body
    let passcypt = await bcrypt.hash(data['password'], 10)
    delete data['password']
    data["password"] = passcypt;
    let newUser = new User(data)
    try {
        let check_email = await User.findOne({email: req.body.email})
        if(check_email) {
            var status = "Please use other email, because this email was available on database"
            var create = false
        } else {
            await newUser.save();
            var create = true
            var status = "Success saving data to database"
        }
        res.status(200).send({ message: status, create: create,status: 200 })
    } catch (error) {
        res.status(400).send({ message: ` Unable to saving data `, status: 400 })
    }
}

exports.detail = async(req, res) => {
    let id = req.params.id;
    try {
        if(!id) {
            res.status(400).send({message: 'Please complete your parameter'})
        } else {
            let data = await User.findById(id);
            res.status(200).send({ data : data, status : 200})
        }
    } catch (error) {
        res.status(500).send({message: 'Internal Error'})
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
    let password = req.body.password;

    if(!id || !name || !address || !company || !jobs || !gender || !email) {
        res.status(400).send({message : " Please Complete your parameter"})
    } else {
        let json = req.body
        /* field on db update
        "name" : name,
        "address" : address,
        "company" : company,
        "jobs" : jobs,
        "gender" : gender,
        "email" : email,
        "password": password 
        */
        try {      
            let check_email = await User.findOne({email: req.body.email})
            if(check_email) {
                res.status(200).send({ message: " Please use other email, because this email was available on db",  update: false ,status:200})
            } else {
                if(!password) {
                    await User.findByIdAndUpdate({_id: id}, json)
                } else {
                    let passcypt = await bcrypt.hash(password, 10)
                    json["password"] = passcypt 
                    await User.findByIdAndUpdate({_id: id}, json)
                }
                res.status(200).send({ message: " Successfully update data", update: true, status:200})
            }
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