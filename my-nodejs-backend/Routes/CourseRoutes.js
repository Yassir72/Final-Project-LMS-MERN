const{getCourses,getCourseById,addCourse,updateCourse,deleteCourse}=require('../Controllers/CourseController')
const Router = require('express').Router()

Router.post('/addCourse',addCourse)
Router.put('/updateCourse',updateCourse);
Router.delete('/deleteCourse',deleteCourse);
Router.get('/getCourses',getCourses);
Router.get('/getCourse:id',getCourseById);


module.exports=Router;