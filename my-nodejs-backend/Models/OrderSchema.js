const mongoose = require('mongoose');
const StudentModel = require('./StudentSchema');
const CourseModel = require('./CourseSchema');
require("../Config/Database");

const OrderSchema = new mongoose.Schema({
    client: { type: mongoose.Schema.Types.ObjectId, ref: 'Student', required: true },
    course: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Course', required: true }],
    orderReference: { type: String, required: true },
    status: { type: String, enum: ['Pending', 'Completed', 'Cancelled'], default: 'Pending' },
    totalAmount: { type: Number, required: true }
}, { timestamps: true });

const OrderModel = mongoose.model('Order', OrderSchema);

// (async () => {
//     try {
//         // Find a specific student
//         const student = await StudentModel.findOne({ _id: '660d658ed557780a3cc10631' });

//         // Find courses
//         const courses = await CourseModel.find({ Price: { $gte: '179' } });
//         // Create order
//         const order = {
//             client: student._id, // Assuming _id is the reference to the student
//             course: courses.map(course => course._id),
//             orderReference: 'ORD1234',
//             status: 'Pending',
//             totalAmount: courses.reduce((total, course) => total + parseInt(course.Price), 0)
//         };

//         // Insert order
//         const createdOrder = await OrderModel.create(order);
//         console.log("Order inserted successfully:", createdOrder);
//     } catch (err) {
//         console.error("Error inserting order:", err);
//     }
// })();

module.exports = OrderModel;
