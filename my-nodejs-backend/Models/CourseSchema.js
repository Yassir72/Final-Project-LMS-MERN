const mongoose = require('mongoose');


const CourseSchema = new mongoose.Schema({
    Image: { type: String, required: true},
    Title: { type: String, required: true },
    Description: { type: String, required: true },
    Price: { type: String, required: true },
    // instructorId: { type: String, required: true}
}, { timestamps: true });


const CourseModel = mongoose.model('Course', CourseSchema);




module.exports = CourseModel;