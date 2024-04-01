const mongoose = require('mongoose');

const categorySchema= new mongoose.Schema({
    name :{type : String , required :true},
    coursesNumber :{type :Number , required :true}
})

const categoryModel = new mongoose.model('category', categorySchema);

module.exports= categoryModel;