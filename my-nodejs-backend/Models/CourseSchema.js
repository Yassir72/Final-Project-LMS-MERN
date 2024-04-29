const mongoose = require('mongoose');


const CourseSchema = new mongoose.Schema({
    Image: { type: String, required: true},
    Title: { type: String, required: true },
    Description: { type: String, required: true },
    Price: { type: String, required: true },
}, { timestamps: true });


const CourseModel = mongoose.model('Course', CourseSchema);


// const courses = [
//     {   
//         Image: "https://img.freepik.com/free-vector/creative-gradient-code-logo_23-2148820572.jpg?size=338&ext=jpg&ga=GA1.1.553209589.1714348800&semt=ais", 
//         Title: "Web Development Bootcamp",
//         Description: "Learn full-stack web development from scratch",
//         Price: "$199",
//     },
//     {
//         Image:"https://as2.ftcdn.net/v2/jpg/00/87/52/33/1000_F_87523378_bMDEkt8T1FL18llxZwePJ2UqVxjJEGGf.jpg",
//         Title: "Data Science Fundamentals",
//         Description: "Master the basics of data science and machine learning",
//         Price: "$149",
//     },
//     {
//         Image:"https://w7.pngwing.com/pngs/408/496/png-transparent-mobile-app-development-web-development-iphone-iphone-thumbnail.png",
//         Title: "Mobile App Development Course",
//         Description: "Build native iOS and Android apps with React Native",
//         Price: "$249",
//     },
//     {
//         Image:"https://cdn.logojoy.com/wp-content/uploads/2018/05/01113832/1359.png",
//         Title: "Graphic Design Masterclass",
//         Description: "Unlock your creativity and design stunning visuals",
//         Price: "$179",
//     },
//     {
//         Image:"https://www.svgrepo.com/show/376344/python.svg",
//         Title: "Introduction to Python Programming",
//         Description: "Learn Python programming language for beginners",
//         Price: "$99",
//     }
// ];


// CourseModel.create(courses)
//     .then((createdCourses) => {
//         console.log("Courses inserted successfully:", createdCourses);
//     })
//     .catch((err) => {
//         console.error("Error inserting courses:", err);
//     });


module.exports = CourseModel;