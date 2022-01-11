const router = require("express").Router();
const User = require("../models/user");
const bcrypt = require("bcrypt");
// const { json } = require("express/lib/response");

//sign Up

router.post("/signup", async (req, res) =>{
    
    try{
        const salt = await bcrypt.genSalt(10);
        const hashed = await bcrypt.hash(req.body.password, salt);
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hashed,
        });
        const user = await newUser.save();
        res.status(200).json(user);
    }catch(err){
        res.status(500).json(err);
    }
});

//login

router.post("/login", async (req, res)=>{
    
    try{
        const user = await User.findOne({username: req.body.username});
        console.log(user);
        const validated = await bcrypt.compare(req.body.password, user.password);
        if(!user || !validated)
        {
            res.status(400).json("wrong username or password");
        }else{
            const {password, ...others} = user._doc
            res.status(200).json(user);
        }
       
    }catch(err){
        res.status(500).json(err)
    }
});

module.exports = router