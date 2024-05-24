const mongoose = require('mongoose');

require("../Config/Database.js")

const AdminSchema = new mongoose.Schema({
    Name : { type : String , required: true },
    Password : { type : String , required: true },
    Email : { type : String , required: true },
    Phonenumber: { type: String},
    Location : { type: String},
    Resumer : { type: String},
    Image : { type: String},
    role : { type: String, enum: ['Super Admin','Admin'] },
}, { timestamps : true })

const AdminModel = new mongoose.model('Admin',AdminSchema);

// AdminModel.create({Name : "john doe", Password : "1234", Email : "John@arkx.com" ,Phonenumber:"0642897149",Location:"Casa",Resumer:"Hi ! i'm John Doe ,happily married and got four kids", Image:"https://cdn-icons-png.flaticon.com/512/3135/3135715.png",role:"Super Admin"})
//   .then((newAdmin)=>console.log('Admin added Successfully : ',newAdmin))
//   .catch((error)=>console.log('Error creating admin : ',error))

module.exports=AdminModel;