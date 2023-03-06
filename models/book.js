const mongoose = require("mongoose");

const bookSchema = new mongoose.default.Schema({
    Text:{
        type: String,
        required: true,
    },
    Type:{
        type: String,
        required: false,
    },
    Issued:{
        type: Date,
        required: true,
    },
    Title:{
        type: String,
        required: true,
    },
    Language:{
        type: String,
        required: true,
    },
    Authors:{
        type: String,
        required: true,
    },
    Subjects:{
        type: String,
        required: false,
    },
    Bookshelves:{
        type: String,
        required: false,
    }
});
module.exports = mongoose.default.model("Book",bookSchema);