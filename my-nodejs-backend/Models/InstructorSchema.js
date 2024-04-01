const mongoose = require('mongoose');

const InstructorSchema = new mongoose.Schema({
    Name: { type: String, required: true },
    Password: { type: String, required: true },
    Email: { type: String, required: true },
    PhoneNumber: { type: String, required: true },
    Specialite: { type: String, required: true },
    Username: { type: String, required: true },
}, { timestamps: true })

const InstructorModel = new mongoose.model('Instructor', InstructorSchema)

module.exports = InstructorModel;