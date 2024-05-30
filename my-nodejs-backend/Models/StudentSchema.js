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
    location: {type:String},
    birthday: {type:String,},
    linkedIn: {type:String},
    github : {type:String},
    role : { type: String, enum: ['Student'],default: 'Student'},

},
    { timestamps : true })

    const StudentModel = new mongoose.model('Student',StudentSchema);

    module.exports = StudentModel