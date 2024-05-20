const mongoose = require('mongoose');
require("../Config/Database")

const CourseSchema = new mongoose.Schema({
    Image: { type: String, required: true },
    Title: { type: String, required: true },
    Description: { type: String, required: true },
    Price: { type: Number, required: true },
    Videos: [{
        title: { type: String, required: true },
        description: { type: String },
        videoUrl: { type: String, required: true }, 
    }]
}, { timestamps: true });

const CourseModel = mongoose.model('Course', CourseSchema);

module.exports = CourseModel;

// const courses = [
//     {   
//         Image: "https://img.freepik.com/free-vector/creative-gradient-code-logo_23-2148820572.jpg?size=338&ext=jpg&ga=GA1.1.553209589.1714348800&semt=ais", 
//         Title: "Web Development Bootcamp",
//         Description: "Learn full-stack web development from scratch",
//         Price: 199,
//         Videos: [
//             {
//                 title: "Introduction to HTML",
//                 description: "Learn the basics of HTML",
//                 videoUrl: 'https://youtu.be/BAx2GaMW2qA'
//             },
//             {
//                 title: "Introduction to CSS",
//                 description: "Learn the basics of CSS",
//                 videoUrl: 'https://youtu.be/OEV8gMkCHXQ'
//             }
//         ]
//     },
//     {
//         Image:"https://as2.ftcdn.net/v2/jpg/00/87/52/33/1000_F_87523378_bMDEkt8T1FL18llxZwePJ2UqVxjJEGGf.jpg",
//         Title: "Data Science Fundamentals",
//         Description: "Master the basics of data science and machine learning",
//         Price: 149,
//         Videos: [
//             {
//                 title: "Introduction to Data Science",
//                 description: "An overview of data science",
//                 videoUrl: 'https://youtu.be/FsSrzmRawUg'
//             },
//             {
//                 title: "Machine Learning Basics",
//                 description: "Introduction to machine learning concepts",
//                 videoUrl: 'https://youtu.be/ukzFI9rgwfU'
//             }
//         ]
//     },
//     {
//         Image:"https://w7.pngwing.com/pngs/408/496/png-transparent-mobile-app-development-web-development-iphone-iphone-thumbnail.png",
//         Title: "Mobile App Development Course",
//         Description: "Build native iOS and Android apps with React Native",
//         Price: 249,
//         Videos: [
//             {
//                 title: "Getting Started with React Native",
//                 description: "Set up your development environment and create your first React Native app",
//                 videoUrl: 'path/to/react_native_intro.mp4'
//             },
//             {
//                 title: "Navigation in React Native",
//                 description: "Learn different navigation techniques in React Native",
//                 videoUrl: 'https://youtu.be/OmQCU-3KPms'
//             }
//         ]
//     },
//     {
//         Image:"https://cdn.logojoy.com/wp-content/uploads/2018/05/01113832/1359.png",
//         Title: "Graphic Design Masterclass",
//         Description: "Unlock your creativity and design stunning visuals",
//         Price: 179,
//         Videos: [
//             {
//                 title: "Introduction to Graphic Design Principles",
//                 description: "Learn about design elements and principles",
//                 videoUrl: 'https://youtu.be/UmHMVU6dceA'
//             },
//             {
//                 title: "Color Theory in Design",
//                 description: "Understanding the psychology of colors in design",
//                 videoUrl: 'https://youtu.be/CSTZG-Dr9MY'
//             }
//         ]
//     },
//     {
//         Image:"https://www.svgrepo.com/show/376344/python.svg",
//         Title: "Introduction to Python Programming",
//         Description: "Learn Python programming language for beginners",
//         Price: 99,
//         Videos: [
//             {
//                 title: "Python Basics",
//                 description: "Learn the fundamentals of Python",
//                 videoUrl: 'https://youtu.be/kqtD5dpn9C8'
//             },
//             {
//                 title: "Working with Data in Python",
//                 description: "Data manipulation and analysis with Python",
//                 videoUrl: 'https://youtu.be/2_6O39UdFi0?list=PLiC1doDIe9rCYWmH9wIEYEXXaJ4KAi3jc'
//             }
//         ]
//     },
// ];

// CourseModel.create(courses)
//     .then((createdCourses) => {
//         console.log("Courses inserted successfully:", createdCourses);
//     })
//     .catch((err) => {
//         console.error("Error inserting courses:", err);
//     });



