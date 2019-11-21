const mongoose = require("mongoose")

let userSchema = mongoose.Schema({
    username:{
        required:true,
        type:String
    },
    password:{
        required:true,
        type:String
    },
    email:{
        required:true,
        type:String
    },
    achievement:[{
        type:String,
        unique:true
    }]
})

let user = mongoose.model("user",userSchema)

module.exports = user