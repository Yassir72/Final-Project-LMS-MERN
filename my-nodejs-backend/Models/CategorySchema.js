const mongoose = require('mongoose');

const categorySchema= new mongoose.Schema({
    name :{type : String , required :true},
    image :{type : String , required :true},
})

const categoryModel = new mongoose.model('category', categorySchema);

module.exports= categoryModel;
