const mongoose = require("mongoose")

let videoSchema = mongoose.Schema({
    title:String,
    gambar:String,
    videos:String,
    tipe:String
})

let video = mongoose.model("video",videoSchema)

module.exports = video