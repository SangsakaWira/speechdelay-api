const mongoose = require("mongoose")

let videoSchema = mongoose.Schema({
    alamat:String
})

let video = mongoose.model("user",userSchema)

module.exports = video