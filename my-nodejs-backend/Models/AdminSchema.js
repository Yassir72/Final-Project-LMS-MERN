const mongoose = require('mongoose');

require("../Config/Database.js")

const AdminSchema = new mongoose.Schema({
    Name : { type : String , required: true },
    Password : { type : String , required: true },
    Email : { type : String , required: true }
}, { timestamps : true })

const AdminModel = new mongoose.model('Admin',AdminSchema);

// AdminModel.create({Name : "aa", Password : "1234", Email : "yassir@arkx.com"})
//   .then((newAdmin)=>console.log('Admin added Successfully : ',newAdmin))
//   .catch((error)=>console.log('Error creating admin : ',error))

module.exports=AdminModel;