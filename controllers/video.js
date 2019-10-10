let video = require("../models/video")

exports.getAll = (req,res)=>{
    video.find((err,doc)=>{
        if(err){
            res.send({
                message:"Something wrong!"
            })
        }else{
            res.send(doc)
        }
    })
}