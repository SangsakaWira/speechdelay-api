const mongoose = require("mongoose")

const keySchema = mongoose.Schema({
    license:String
})

let key = mongoose.model("key",keySchema)

module.exports = key