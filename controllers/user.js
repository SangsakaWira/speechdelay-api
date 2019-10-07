let user = require("../models/user")

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

// LOGIN & REGISTER
exports.login = (req,res) =>{
    user.find({username:req.body.username,password:req.body.password},(err,doc)=>{
        if(err){
            res.send({
                message:"Something wrong!"
            })
        }else{
            if(doc.length == 1){
                res.send({
                    message:"Success"
                })
            }else{
                res.send({
                    message:"User not found"
                })
            }
        }
    })
}

exports.register = (req,res) =>{
    user.find({username:req.body.username},(err,doc)=>{
        if(err){
            res.send({
                message:"Something wrong!"
            })
        }else{
            if(doc.length != 0){
                res.send({
                    message:"username is already taken"
                })
            }else{
                user.create(req.body,(err,doc)=>{
                    if(err){
                        message:"Something wrong while register"
                    }else{
                        res.send({
                            message:"Register success"
                        })
                    }
                })
            }
        }
    })
}
