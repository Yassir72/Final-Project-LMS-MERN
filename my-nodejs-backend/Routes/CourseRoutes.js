const{getCourses,getCourseById,addCourse,updateCourse,deleteCourse,upload}=require('../Controllers/CourseController')
const Router = require('express').Router()

Router.post('/addCourse', upload.single('video') ,addCourse)
Router.put('/updateCourse/:id',upload.single('video'),updateCourse);
Router.delete('/deleteCourse/:id',deleteCourse);
Router.get('/getCourses',getCourses);
Router.get('/getCourse/:id',getCourseById);


module.exports=Router;