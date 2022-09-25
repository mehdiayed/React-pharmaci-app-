const mongoose = require('mongoose');


const UsersSchema = new mongoose.Schema({
    Name_LastName :{
        type: String,
        required:true,
    },
    Login : {
        type: String,
        required:true,
    },
    Pwd:{
        type: String,
        required:true,
    },
    Tel:{
        type: Number,
        required:true,
    },
    Mail:{
        type: String,
        required:true,
    },
    Adress:{
        type: String,
        required:true,
    },
    Grade:{
        type: String,
        required:true,
    },
    Typeprofil:{
        type: String,
        required:true,
    },
});

const users =mongoose.model("users",UsersSchema);
module.exports = users;