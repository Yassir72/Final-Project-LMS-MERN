const mongoose=require('mongoose');

const studentSchema=new mongoose.Schema({
    name: {type:String, required:true},
    email: {type:String ,required:true ,unique:true},
    username : {type:String, required:true},
    password: {type:String, required:true},
    phoneNumber: {type:String, required:true},
    level: {type:String, required:true},   
},
    { timestamps : true })

    const studentModel = new mongoose.model('Student',studentSchema)

    module.exports=studentModel;