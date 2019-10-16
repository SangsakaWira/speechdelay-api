const mongoose = require("mongoose")

const keySchema = mongoose.Schema({
    license:String,
    username:String
})

let key = mongoose.model("key",keySchema)

module.exports = key