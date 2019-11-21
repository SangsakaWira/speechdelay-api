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
                    tipe:data.tipe,
                    gambar:host+"/"+data.tipe+"/"+data.gambar,
                    videos:host+"/"+data.tipe+"/"+data.videos
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
    video.find({tipe:"benda"},(err,doc)=>{
        if(err){
            res.send({
                message:"Something wrong!"
            })
        }else{
            doc.map((data)=>{
                datas.push({
                    id:data._id,
                    title:data.title,
                    tipe:data.tipe,
                    gambar:host+"/"+data.tipe+"/"+data.gambar,
                    videos:host+"/"+data.tipe+"/"+data.videos
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
    video.find({tipe:"materi"},(err,doc)=>{
        if(err){
            res.send({
                message:"Something wrong!"
            })
        }else{
            doc.map((data)=>{
                datas.push({
                    id:data._id,
                    title:data.title,
                    tipe:data.tipe,
                    gambar:host+"/"+data.tipe+"/"+data.gambar,
                    videos:host+"/"+data.tipe+"/"+data.videos
                })
            })
            res.send({
                data:datas
            })
        }
    })
}

exports.getById = (req,res)=>{
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
                tipe:data.tipe,
                gambar:host+"/"+doc.tipe+"/"+doc.gambar,
                videos:host+"/"+doc.tipe+"/"+doc.videos
            }
            res.send({data:[datas]})
        }
    })
}

// exports.getBendaById = (req,res)=>{
//     let host = ""
//     ip.find((err,doc)=>{
//         host = "http://"+doc[0].ip+":"+doc[0].port
//     })
//     video.findById(req.params.id,(err,doc)=>{
//         if(err){
//             res.send({
//                 message:"error"
//             })
//         }else{
//             let datas = {
//                 title:doc.title,
//                 tipe:data.tipe,
//                 gambar:host+"/"+data.tipe+"/"+doc.gambar,
//                 videos:host+"/"+data.tipe+"/"+doc.videos
//             }
//             res.send({data:[datas]})
//         }
//     })
// }

exports.getVideoByName = (req,res)=>{
    video.findOne({title:req.params.title},(err,doc)=>{
        if(err){
            res.send({
                message:"error"
            })
        }else{
            res.send({
                doc:[doc]
            })
        }
    })
}