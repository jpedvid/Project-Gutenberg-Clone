const express = require("express");
const router = express.Router();
const Book = require('../models/book');

router.get("/", async(req,res)=>{
    try {
        const books = await Book.find();
        res.json(books);
    } catch (err){
        console.error(err);
    }
});
router.get("/:id",async (req,res)=>{
    try {
        let o = await Book.findOne({Text: req.params.id}).exec();
        o ? res.json(o) : res.status(404).json({"message": "resource not found"});
    }catch (err){
        console.error(err);
    }
});
router.get("/bookshelf/:bookshelf",async(req,res)=>{
    try{
        let o = await Book.find({"Bookshelves": {$regex: req.params.bookshelf}}).then((resp,err)=>{
            try {
                let e = [];
                for (let a of resp) {
                        let b = a.Bookshelves.split('; ');
                        let d = false;
                        for (let c of b) {

                            if (c == req.params.bookshelf) {
                                d = true;
                            }
                        }
                        if (d) {
                            e.push(a);
                        }

                }return e;
            }catch (e) {
                console.error(e);
            }
        }

        ).catch((e)=>{
            console.error(e);
        })

        o? res.json(o) : res.status(404).json({"message":"resource not found"});
    }catch(err){
        console.error(err);
    }
});
router.get("/author/:author",async(req,res)=>{
    try{
        let o = await Book.find({"Authors":{$regex: req.params.author,$options: 'i'}}).then((data)=>{
            console.log(data);
            return data;
        }).catch((e)=>{console.error(e);});

        o ? res.json(o) : res.status(404).json({"message":"resource not found"});
    }catch (err){
        console.error(err);
    }
});
router.post("/", async(req,res)=>{
    const book = new Book({
        Text: req.body.Text,
        Type: req.body.Type,
        Issued: req.body.Issued,
        Title: req.body.Title,
        Language: req.body.Language,
        Authors: req.body.Authors,
        Subjects: req.body.Subjects,
        Bookshelves: req.body.Bookshelves
    });
    try {
        const bo = await book.save();
        res.json(bo);
    }catch (err){
        console.error(err);
    }
});
module.exports = router;