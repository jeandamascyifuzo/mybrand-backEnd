const mongoose = require('mongoose');

const blogSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    title: {
        type: String,
        required: true,
        unique: true
    },
    content:{ 
         type: String, 
         required: true 
        },
    blogImage:{
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Blog', blogSchema);