const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
app.use(cors());
mongoose.default.connect(`mongodb+srv://jacksonpedvis:OP358JCsgKYGtFz9@cluster0.rmu3gyr.mongodb.net/books`,{},(err)=>{
    console.error(err);
});
const usersRouter = require('./routes/users');
const booksRouter = require('./routes/books');
const bookshelfRouter = require('./routes/bookshelves');
const con = mongoose.default.connection;
con.on('open',function(){
    console.log("connected...");
});
app.use(express.json());
app.use("/api/users",usersRouter);
app.use("/api/books",booksRouter);
app.use("/api/bookshelves",bookshelfRouter);
app.listen(9000,function(){
    console.log("server started");
});