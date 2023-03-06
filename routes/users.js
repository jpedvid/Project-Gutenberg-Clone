const express = require("express");
const router = express.Router();
const User = require('../models/user');
router.get("/",async(req,res)=>{
    try{
        const users = await User.find();
        res.json(users);
    }catch (err){
        res.send(err);
    }
});
router.post('/', async(req,res)=>{
    const user = new User({
        id: req.body.id,
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        borrowed_books: req.body.borrowed_books,
        password: req.body.password
    });
    try {
        const us = await user.save();
        res.json(us);
    }catch (err){
        console.error(err);
    }
});

module.exports = router;