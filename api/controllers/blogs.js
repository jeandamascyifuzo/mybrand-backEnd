const mongoose = require('mongoose');
const Blog = require('../models/blog');

//create blog post
exports.createBloges = async (req, res, next)=>{
    console.log(req.file)
    const blog = new Blog({
        _id: new mongoose.Types.ObjectId(),
        title: req.body.title,
        subtitle: req.body.subtitle,
        content: req.body.content,
        blogImage: req.body.blogImage,
        author: req.body.author
      });
     await blog
              .save()
              .then(result => {
                res.status(201).json({
                  status: "success",
                  message: " Blog Created",
                  CreatedBlog: {
                      title: result.title,
                      subtitle: result.subtitle,
                      content: result.content,
                      blogImage: result.blogImage,
                      author: result.author,
                      _id: result._id,
                      request: {
                          type: 'GET',
                          url: "http://localhost:3000/api/v1/blogs/" + result._id
                      }
                  }
                });
              })
              .catch(err => {
                res.status(500).json({
                  status: "fail",
                  error: err
                });
              });
    }

//get single blog
    exports.getBlog = (req, res, next)=>{
        const id = req.params.blogId;
        Blog.findById(id)
          .select('title subtitle content author blogImage _id')
          .exec()
          .then(doc => {
            if (doc) {
              res.status(200).json({
                  status: "success",
                  data:{
                  blog: doc,
                  request: { 
                      type: 'GET',
                      url: 'http://localhost:3000/api/v1/blogs'
                  }
                }
              });
            } else {
              res
                .status(404)
                .json({ 
                  status: "fail",
                  message: "No valid entry found for provided ID" });
            }
          })
          .catch(err => {
            res.status(500).json({ 
              status: "fail",
              error: err });
          });
    }

//get all blogs
    exports.getBlogs = (req, res, next)=>{
        Blog.find()
        .select('title subtitle content author blogImage _id')
        .exec()
        .then(docs => {
          const response = {
            count: docs.length,
            status:"success",
            data:{
            blogs: docs.map(doc => {
              return {
                title: doc.title,
                subtitle: doc.subtitle,
                blogImage: doc.blogImage,
                content: doc.content,
                author: doc.author,
                _id: doc._id,
                request: {
                  type: "GET",
                  url: "http://localhost:3000/api/v1/blogs/" + doc._id
                }
              };
            })}
          };
          res.status(200).json(response);
        })
      .catch(err =>{
          res.status(500).json({
              status: "fail",
              error:err
          });
      });
    }

    //update blog
    exports.updateBlog = (req, res, next)=>{
        const id = req.params.blogId;
        const updateOps = {};
        for(const ops of req.body){
            updateOps[ops.proTitle] = ops.value;
        }
        Blog.updateOne({ _id: id}, {$set: updateOps})
        .exec()
        .then(result =>{
            res.status(200).json({
              status: "success",
              message:"Blog updated",
              data:{
                blog:result
              }
              
            });
        })
        .catch(err =>{
           res.status(500).json({
              status: "fail",
               error: err
           });
        });
    }

    //delete blog
    exports.deleteBlog = (req, res, next)=>{
        const id = req.params.blogId;
        Blog.deleteOne({ _id: id})
        .exec()
        .then(result =>{
            res.status(200).json({
                status: "success",
                message:"Blog deleted",
                blog: result
            });
        })
        .catch(err => {
            res.status(500).json({
                status: "fail",
                error: err
            });
        });
    }