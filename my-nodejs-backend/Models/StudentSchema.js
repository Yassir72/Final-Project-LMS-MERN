require("../Config/Database.js")
const mongoose = require('mongoose');
const StudentSchema=new mongoose.Schema({
    firstname: {type:String, },
    lastname: {type: String, },
    email: {type:String ,required:true ,unique:true},
    username : {type:String, required:true},
    password: {type:String, required:true},
    Image: {type:String},
    phoneNumber: {type:String,}, 
    role : { type: String, enum: ['Student'],required: true },
},
    { timestamps : true })

    const StudentModel = new mongoose.model('Student',StudentSchema);

    module.exports = StudentModel