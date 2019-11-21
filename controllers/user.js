let user = require("../models/user")
const bcrypt = require("bcrypt")

const saltRounds = 12
let salt = bcrypt.genSaltSync(saltRounds);

// ALL GET DATA
exports.getAll = (req,res)=>{
    user.find((err,doc)=>{
        if(err){
            res.send({
                message:"Something wrong!"
            })
        }else{
            res.send(doc)
        }
    })
}

// GET BY ID
exports.getById = (req,res) =>{
    user.findById(req.params.id,(err,doc)=>{
        if(err){
            res.send({
                message:err
            })
        }else{
            res.send({
                message:1,
                data:[doc]
            })
        }
    })
}

// LOGIN & REGISTER
exports.login = (req,res) =>{
    user.find({username:req.body.username},(err,doc)=>{
    // console.log(doc[0].username)
    let pass = bcrypt.compareSync(req.body.password,doc[0].password); // true
    // pass = true
    if(pass){
        if(err){
            res.send({
                message:"Something wrong!"
            })
        }else{
            if(doc.length == 1){
                res.send({
                    message:1,
                    data:doc
                })
            }else{
                res.send({
                    message:"User not found"
                })
            }
        }
    }else{
        res.send({
            message:"Wrong Password"
        })
    }
    })
}

exports.register = (req,res) =>{
    user.find({$or:[{username:req.body.username},{email:req.body.email}]},(err,doc)=>{
        if(err){
            res.send({
                message:"Something wrong!"
            })
        }else{
            if(doc.length != 0){
                res.send({
                    message:"username or email is already taken"
                })
            }else{
                if(Object.keys(req.body).length == 3){
                    let hashPassword = bcrypt.hashSync(req.body.password, saltRounds);
                    let newUser = {
                        username:req.body.username,
                        password:hashPassword,
                        email:req.body.email,
                        achievement:[]
                    }
                    user.create(newUser,(err,doc)=>{
                        res.cookie("password",req.body.password)
                        res.cookie("username",req.body.username)
                        if(err){
                            res.send(
                                {message:"Something wrong while register"}
                            )
                        }else{
                            res.send({
                                message:1,
                                data:[newUser]
                            })
                        }
                    })
                }
                else{
                    res.send({
                        message:"Oops all inputs could not be empty"
                    })
                }
            }
        }
    })
}


exports.getByUsernameAndUpdate = (req,res)=>{
    user.findOneAndUpdate({
        username:req.params.username
    }, {
        $push: {
            achievement:req.params.item
        }
    }, {
        new: true
    }, function (err, doc) {
        if (err) {
            console.log("Something wrong when updating data!");
            res.send({
                message:"Something wrong when updating data!"
            })
        }
        else{
            res.send({
                message:"Success"
            })
        }
    })
}

exports.getByIdAndUpdate = (req,res)=>{
    user.findByIdAndUpdate({
        _id:req.params.id
    }, {
        $push: {
            achievement:req.params.item
        }
    }, {
        new: true
    }, function (err, doc) {
        if (err) {
            console.log("Something wrong when updating data!");
            res.send({
                message:"Something wrong when updating data!"
            })
        }
        else{
            res.send({
                message:"Success"
            })
        }
    })
}


exports.getByIdAndDelete = (req,res)=>{
    user.findByIdAndUpdate({
        _id:req.params.id
    }, {
        $set: {
            achievement:[]
        }
    }, {
        new: true
    }, function (err, doc) {
        if (err) {
            console.log("Something wrong when updating data!");
            res.send({
                message:"Something wrong when updating data!"
            })
        }
        else{
            res.send({
                message:"Success"
            })
        }
    })
}

exports.getByUsernameAndDelete = (req,res)=>{
    user.findOneAndUpdate({
        username:req.params.username
    }, {
        $set: {
            achievement:[]
        }
    }, {
        new: true
    }, function (err, doc) {
        if (err) {
            console.log("Something wrong when updating data!");
            res.send({
                message:"Error, data is not updated"
            })
        }
        else{
            res.send({
                message:"Success"
            })
        }
    })
}