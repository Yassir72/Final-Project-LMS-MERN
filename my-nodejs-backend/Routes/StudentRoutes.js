const {register,login,logout,deleteStudent,updateStudent,getStudents,getStudentById} = require('../Controllers/Users/StudentController') 
const Router=require('express').Router();

Router.post('/register',register);
Router.post('/login',login);
Router.post('/logout',logout);
Router.post('/updatestudent',updateStudent);
Router.post('/deletestudent',deleteStudent);
Router.post('/getstudents',getStudents);
Router.post('/getstudent:id',getStudentById);


module.exports=Router;