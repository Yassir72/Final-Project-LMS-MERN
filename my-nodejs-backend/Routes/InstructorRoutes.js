const {SignUp, SignIn, UpdateInstructor, deleteInstructor, getAllInstructor,getInstructorById} = require('../Controllers/Users/InstructorController');
const Router= require('express').Router()

Router.post('/register',SignUp);
Router.post('/login',SignIn);
Router.put('/updateInstructor',UpdateInstructor);
Router.delete('/deleteInstructor',deleteInstructor);
Router.get('/getInstructors',getAllInstructor);
Router.get('/getInstructor:id',getInstructorById);


module.exports=Router;