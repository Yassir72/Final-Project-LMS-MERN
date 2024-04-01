const mongoose = require('mongoose');

const CourseSchema = new mongoose.Schema({
    Titre: { type: String, required: true },
    Description: { type: String, required: true },
    Prix: { type: String, required: true },
}, { timestamps: true })

const CorseModel= new mongoose.model('Course', CourseSchema)

module.exports = CorseModel;