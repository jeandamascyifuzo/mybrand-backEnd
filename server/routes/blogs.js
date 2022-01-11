const router = require("express").Router();
// const { route } = require("express/lib/application");
const blog = require("../models/blog");
// const User = require("../models/user");


//CREATE BLOG

router.post("/", async (req, res) =>{
    const newBlog = new blog(req.body);
    try {
        const savedBlog = await newBlog.save();
        res.status(200).json(savedBlog);

    } catch (err) {
        res.status(500).json(err);
    }
});

//UPDATE POST

router.put("/:id", async (req, res) =>{
    try {
        const blog= await blog.findById(req.params.id);
        console.log(blog)
        if(blog.username === req.body.username){
        try{
            const updatedBlog = await blog.findByIdAndUpdate(
                req.params.id,
                {
                    $set: req.body,
                },
                {new: true}
            );
            res.status(200).json(updatedBlog);
    } catch (err) {
        res.status(500).json(err);
    }
}else{
    res.status(401).json("u can update ur own blog");
}
    }catch (err) {
        res.status(500).json(err);
    }
    
});


 //DELETE POST

router.delete("/:id", async (req, res) =>{
    try {
        const blog= await blog.findById(req.params.id);
        if(blog.username === req.body.username){
        try{
            await blog.delete();
            res.status(200).json("blog has been deleted");
        
    } catch (err) {
        res.status(500).json(err);
    }
}else{
    res.status(401).json("u can delete ur own blog");
}
    }catch (err) {
        res.status(500).json(err);
    } 
});

//GET POST
router.get("/:id", async (req, res)=> {
    try{
        const blog = await blog.findById(req.params.id);
        res.status(200).json(blog);
    }catch(err){
        res.status(500).json(err);
    }
});

module.exports = router