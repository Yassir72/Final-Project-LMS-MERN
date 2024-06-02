const mongoose = require('mongoose');
require("../Config/Database")
const StudentModel=require("../Models/StudentSchema")
const CourseModel=require("../Models/CourseSchema")


const CartSchema = new mongoose.Schema({
    client:{ type:mongoose.Schema.Types.ObjectId, ref:'Student', required: true},
    courses: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Course', required: true }],
    totalPrice: { type: Number, default: 0 }
}, { timestamps : true })

const CartModel = new mongoose.model('Cart',CartSchema)

module.exports=CartModel;

// (async () => {
//     try {
//         // Find a specific student
//         const student = await StudentModel.findOne({ _id: '663cd76849a0164861a963cd' });

//         // Find courses
//         const courses = await CourseModel.find({ Price: { $gte: '100' } });
//         // Create order
//         const order = {
//             client: student._id, // Assuming _id is the reference to the student
//             course: courses.map(course => course._id),
//             totalPrice: 0
//         };

//         // Insert order
//         const createdCart = await CartModel.create(order);
//         console.log("Cart inserted successfully:", createdCart);
//     } catch (err) {
//         console.error("Error inserting cart:", err);
//     }
// })();