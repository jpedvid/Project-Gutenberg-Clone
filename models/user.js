const mongoose = require("mongoose");
const userSchema = new mongoose.default.Schema({
    id:{
        type: String,
        required: true,
    },
    first_name: {
        type: String,
        required: true,
    },
    last_name:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
        unique: true,
    },
    borrowed_books:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Book',
        required:false,
    }],
    password:{
        type: String,
        required: true,
    }
})
module.exports = mongoose.default.model("User",userSchema);