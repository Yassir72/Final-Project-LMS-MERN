require("../Config/Database.js")
const mongoose = require('mongoose');
const StudentSchema=new mongoose.Schema({
    firstname: {type:String, required:true},
    lastname: {type: String, required:true},
    email: {type:String ,required:true ,unique:true},
    username : {type:String, required:true},
    password: {type:String, required:true},
    Image: {type:String},
    phoneNumber: {type:String, required:true}, 
},
    { timestamps : true })

    const StudentModel = new mongoose.model('Student',StudentSchema);

    module.exports = StudentModel