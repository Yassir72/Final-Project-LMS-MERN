const {register,login,logout,deleteStudent,updateStudent,getStudents,getStudentById,enroll} = require('../Controllers/Users/StudentController') 
const Router = require('express').Router();

Router.post('/register',register);
Router.post('/enroll',enroll);
Router.post('/logout',logout);
Router.post('/updateStudent',updateStudent);
Router.post('/deleteStudent',deleteStudent);
Router.get('/getStudents',getStudents);
Router.get('/getStudentById/:id',getStudentById);


module.exports = Router;