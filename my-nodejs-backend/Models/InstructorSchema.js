const mongoose = require('mongoose');
require("../Config/Database")

const InstructorSchema = new mongoose.Schema({
    name: { type: String, required: true },
    password: { type: String, required: true },
    email: { type: String, required: true },
    phonenumber: { type: String, required: true },
    specialite: { type: String, required: true },
    username: { type: String, required: true },
    Image:{ type:String}
}, { timestamps: true })

const InstructorModel = new mongoose.model('Instructor', InstructorSchema)
// InstructorModel.create(
//     [{

//         Name: "Ahmed" ,  
//         Password :"1234",
//         Email : "ahmedelgamal@gmail.com",
//         PhoneNumber: "+21265656565",
//         Specialite:"Rédaction et grammaire",  
//         Username:"ElGamal_AHMED"  

//     }],             
// )
module.exports = InstructorModel;
