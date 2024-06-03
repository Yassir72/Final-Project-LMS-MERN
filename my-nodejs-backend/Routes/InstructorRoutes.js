const {SignUp, SignIn, UpdateInstructor, deleteInstructor, getAllInstructor,
    addInstructor,getInstructorById} = require('../Controllers/Users/InstructorController');
const Router= require('express').Router()

Router.post('/register',SignUp);
Router.post('/login',SignIn);
Router.post('/addInstructor',addInstructor);
Router.put('/updateInstructor',UpdateInstructor);
Router.post('/deleteInstructor',deleteInstructor);
Router.get('/getInstructors',getAllInstructor);
Router.get('/getInstructor/:id',getInstructorById);


module.exports=Router;