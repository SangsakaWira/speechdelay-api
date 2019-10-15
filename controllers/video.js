let video = require("../models/video")
let ip = require("../models/ip_address")

exports.getAll = (req,res)=>{
    let datas = []
    let host = ""
    ip.find((err,doc)=>{
        host = "http://"+doc[0].ip+":"+doc[0].port
    })
    video.find((err,doc)=>{
        if(err){
            res.send({
                message:"Something wrong!"
            })
        }else{
            doc.map((data)=>{
                datas.push({
                    id:data._id,
                    title:data.title,
                    gambar:host+"/"+"benda"+"/"+data.gambar,
                    videos:host+"/"+"benda"+"/"+data.videos
                })
            })
            res.send({
                data:datas
            })
        }
    })
}

exports.getAllBenda = (req,res) =>{
    let datas = []
    let host = ""
    ip.find((err,doc)=>{
        host = "http://"+doc[0].ip+":"+doc[0].port
    })
    video.find((err,doc)=>{
        if(err){
            res.send({
                message:"Something wrong!"
            })
        }else{
            doc.map((data)=>{
                datas.push({
                    id:data._id,
                    title:data.title,
                    gambar:host+"/"+"benda"+"/"+data.gambar,
                    videos:host+"/"+"benda"+"/"+data.videos
                })
            })
            res.send({
                data:datas
            })
        }
    })
}

exports.getAllMateri = (req,res) =>{
    let datas = []
    let host = ""
    ip.find((err,doc)=>{
        host = "http://"+doc[0].ip+":"+doc[0].port
    })
    video.find((err,doc)=>{
        if(err){
            res.send({
                message:"Something wrong!"
            })
        }else{
            doc.map((data)=>{
                datas.push({
                    id:data._id,
                    title:data.title,
                    gambar:host+"/"+"materi"+"/"+data.gambar,
                    videos:host+"/"+"materi"+"/"+data.videos
                })
            })
            res.send({
                data:datas
            })
        }
    })
}

exports.getMateriById = (req,res)=>{
    let host = ""
    ip.find((err,doc)=>{
        host = "http://"+doc[0].ip+":"+doc[0].port
    })
    video.findById(req.params.id,(err,doc)=>{
        if(err){
            res.send({
                message:"error"
            })
        }else{
            let datas = {
                title:doc.title,
                gambar:host+"/"+"materi"+"/"+doc.gambar,
                videos:host+"/"+"materi"+"/"+doc.videos
            }
            res.send(datas)
        }
    })
}

exports.getBendaById = (req,res)=>{
    let host = ""
    ip.find((err,doc)=>{
        host = "http://"+doc[0].ip+":"+doc[0].port
    })
    video.findById(req.params.id,(err,doc)=>{
        if(err){
            res.send({
                message:"error"
            })
        }else{
            let datas = {
                title:doc.title,
                gambar:host+"/"+"benda"+"/"+doc.gambar,
                videos:host+"/"+"benda"+"/"+doc.videos
            }
            res.send(datas)
        }
    })
}