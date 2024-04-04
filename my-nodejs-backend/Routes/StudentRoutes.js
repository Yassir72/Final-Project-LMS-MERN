const {register,login,logOut}=require('../Controllers/Users/StudentController');
const Router=require('express').Router();

Router.post('/register',register);
Router.post('/login',login);
Router.post('/logout',logOut);

module.exports=Router;