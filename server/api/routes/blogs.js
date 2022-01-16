const express = require('express');
const router = express.Router();
const multer = require('multer');
const checkAuth = require('../midleware/check-auth');
const BlogsController = require('../controllers/blogs');

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, './uploads/');
  },
  filename: function(req, file, cb) {
    cb(null, new Date().toISOString() + file.originalname);
  }
});

const fileFilter = (req, file, cb) =>{
  if(file.minetype === 'image/JPG' || 'image/jpeg' || 'image/png'){
    cb(null, true);
  }else{
    cb(null, false);
  }
} 
const upload = multer({storage: storage});

// const Blog = require('../models/blog');

router.get('/', BlogsController.getBlogs);

router.post('/', checkAuth, upload.single('blogImage'), BlogsController.createBloges);

router.get('/:blogId', BlogsController.getBlog);

router.patch('/:blogId', checkAuth, BlogsController.updateBlog);

router.delete('/:blogId', checkAuth, BlogsController.deleteBlog);
module.exports = router;