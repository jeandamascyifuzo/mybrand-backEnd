const mongoose = require('mongoose');
const Blog = require('../models/blog');

//create blog post
exports.createBloges = async (req, res, next)=>{
    console.log(req.file)
    const blog = new Blog({
        _id: new mongoose.Types.ObjectId(),
        title: req.body.title,
        content: req.body.content,
        blogImage: req.file.path
      });
     await blog
              .save()
              .then(result => {
                res.status(201).json({
                  message: " Blog Created successfully",
                  CreatedBlog: {
                      title: result.title,
                      content: result.content,
                      blogImage: result.blogImage,
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
                  error: err
                });
              });
    }

//get single blog
    exports.getBlog = (req, res, next)=>{
        const id = req.params.blogId;
        Blog.findById(id)
          .select('title blogImage content _id')
          .exec()
          .then(doc => {
            if (doc) {
              res.status(200).json({
                  blog: doc,
                  request: { 
                      type: 'GET',
                      url: 'http://localhost:3000/api/v1/blogs'
                  }
              });
            } else {
              res
                .status(404)
                .json({ message: "No valid entry found for provided ID" });
            }
          })
          .catch(err => {
            res.status(500).json({ error: err });
          });
    }

//get all blogs
    exports.getBlogs = (req, res, next)=>{
        Blog.find()
        .select("title blogImage content _id")
        .exec()
        .then(docs => {
          const response = {
            count: docs.length,
            status:"success",
            data:{
            blogs: docs.map(doc => {
              return {
                title: doc.title,
                blogImage: doc.blogImage,
                content: doc.content,
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
              message:"Blog updated"
            });
        })
        .catch(err =>{
           res.status(500).json({
               error: err
           });
        });
    }

    //delete blog
    exports.deleteBlog = (req, res, next)=>{
        const id = req.params.blogId;
        Blog.remove({ _id: id})
        .exec()
        .then(result =>{
            res.status(200).json({
                message:"Blog deleted"
            });
        })
        .catch(err => {
            res.status(500).json({
                error: err
            });
        });
    }