const {register,login} = require('../Controllers/Users/UsersController') 
const Router = require('express').Router();

Router.post('/register',register);
Router.post('/login',login);
// Router.post('/logout',logout);
// Router.put('/updateStudent',updateStudent);
// Router.post('/deleteStudent',deleteStudent);
// Router.get('/getStudents',getStudents);
// Router.get('/getStudent:id',getStudentById);


module.exports = Router;