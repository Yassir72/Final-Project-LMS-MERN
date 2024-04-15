const mongoose=require('mongoose');
require("../Config/Database.js")

const StudentSchema=new mongoose.Schema({
    firstname: {type:String, required:true},
    lastname: {type: String, required:true},
    email: {type:String ,required:true ,unique:true},
    username : {type:String, required:true},
    password: {type:String, required:true},
    phoneNumber: {type:String, required:true}, 
},
    { timestamps : true })

    const StudentModel = new mongoose.model('Student',StudentSchema)

    // StudentModel.create({
    //     firstname : 'Hicham',
    //     lastname : 'Tachtoukt',
    //     email: 'hicham@gmail.com',
    //     password: 'tdcztw',
    //     username: 'Ht10',
    //     phoneNumber: '0642897149'
    // })
    // .then((user)=>console.log('User added',user))
    // .catch((err)=>console.log(err))

    module.exports=StudentModel;