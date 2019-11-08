const mongoose = require("mongoose")

let artikulasiSchema = mongoose.Schema({
    username:{
        type:String
    },
    benda:{
        type:String
    }
})

let artikulasi = mongoose.model("user",artikulasiSchema)

module.exports = artikulasi