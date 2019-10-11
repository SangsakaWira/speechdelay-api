const mongoose = require("mongoose")

let ipSchema = mongoose.Schema({
    ip:String,
    port:String
})

let ip = mongoose.model("ip",ipSchema)

module.exports = ip