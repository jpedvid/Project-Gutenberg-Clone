const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
const bookshelfSchema = new mongoose.default.Schema({
    Bookshelves:{
        type:String,
        required:true
    }
});
const bookshelf = mongoose.default.model("Bookshelf",bookshelfSchema);
router.get("/",async(req,res)=>{
   try{
        const bookshelves = await bookshelf.find();
        res.json(bookshelves);
   }catch (err){
       console.error(err);
   }
});
module.exports = router;