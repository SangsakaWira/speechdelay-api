const ip = require("../models/ip_address")

exports.createHost = (req,res)=>{
    ip.create({ip:req.params.ip,port:req.params.port},(err,doc)=>{
        if(err){
            res.send({
                message:"Something went wrong!"
            })
        }else{
            res.send({
                message:"New host created!"
            })
        }
    })
}

exports.updateById = (req, res) => {
    ip.findByIdAndUpdate(
        req.params.id,
        req.params,
        { new: true },
        (err, doc) => {
            if (err) {
                res.send({
                    error: err
                })
            } else {
                res.send({
                    message: 'Success',
                    data: doc
                })
            }
        }
    )
}

exports.getAllHost = (req,res)=>{
    ip.find((err,doc)=>{
        res.send(doc)
    })
}