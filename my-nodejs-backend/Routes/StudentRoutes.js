const {register,login,logout,deleteStudent,updateStudent,getStudents,getStudentById} = require('../Controllers/Users/StudentController') 
const Router = require('express').Router();

Router.post('/register',register);
// Router.post('/login',login);
Router.post('/logout',logout);
Router.put('/updateStudent',updateStudent);
Router.post('/deleteStudent',deleteStudent);
Router.get('/getStudents',getStudents);
Router.get('/getStudentById/:id',getStudentById);


module.exports = Router;