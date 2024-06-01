require("../Config/Database.js")
const mongoose = require('mongoose');
const StudentSchema=new mongoose.Schema({
    firstname: {type:String, },
    lastname: {type: String, },
    email: {type:String , unique:true},
    username : {type:String, },
    password: {type:String, },
    Image: {type:String},
    phoneNumber: {type:String,}, 
    location: {type:String},
    birthday: {type:String,},
    linkedIn: {type:String},
    github : {type:String},
    role : { type: String, enum: ['Student'],default: 'Student'},
    courses: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Course'}],
    // orders: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Order', required: true }],
    // reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Review', required: true }],
    // instructor: { type: mongoose.Schema.Types.ObjectId, ref: 'Instructor', required: true },

},
    { timestamps : true })

    const StudentModel = new mongoose.model('Student',StudentSchema);

    module.exports = StudentModel