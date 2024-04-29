const {register,login,logout,deleteStudent,updateStudent,getStudents,getStudentById} = require('../Controllers/Users/StudentController') 
const Router=require('express').Router();

Router.post('/register',register);
Router.post('/login',login);
Router.post('/logout',logout);
Router.put('/updatestudent',updateStudent);
Router.delete('/deletestudent',deleteStudent);
Router.get('/getstudents',getStudents);
Router.get('/getstudent:id',getStudentById);


module.exports=Router;