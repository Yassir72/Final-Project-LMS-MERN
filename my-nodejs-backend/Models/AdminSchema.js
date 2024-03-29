const mongoose = require('mongoose');

const AdminSchema = new mongoose.Schema({
    Name : { type : String , required: true },
    Password : { type : String , required: true },
    Email : { type : String , required: true }
}, { timestamps : true })

const AdminModel = new mongoose.model('Admin',AdminSchema)

module.exports=AdminModel;