const mongoose = require('mongoose')
const Comments = require('../models/comment')

exports.addComment = async(req,res)=>{
    try {
        const data = (req.body)
        const comments = new Comments({...data, blog:req.params.id})

        await comments.save()
        res.status(200).send({
            status: "success",
            data: {
                coment: comments
            }
        })
    } catch (error) {
        res.status(400).send({
            status: "fail",
            error: message
        })
    }
}

exports.getComments = async(req,res)=>{
    
        const comments = await Comments.findOne({blog:req.params.id})
        res.status(200).send(comments)
}