const mongoose=require('mongoose');

const StudentSchema=new mongoose.Schema({
    name: {type:String, required:true},
    email: {type:String ,required:true ,unique:true},
    username : {type:String, required:true},
    password: {type:String, required:true},
    phoneNumber: {type:String, required:true},
    level: {type:String, required:true},   
},
    { timestamps : true })

    const StudentModel = new mongoose.model('Student',StudentSchema)

    module.exports=StudentModel;