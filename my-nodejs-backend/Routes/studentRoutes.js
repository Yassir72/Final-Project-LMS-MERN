const {register,login,logOut}=require('../Controllers/Users/StudentController');
const router=require('express').Router();

router.post('/register',register);
router.post('/login',login);
router.post('/logout',logOut);

module.exports=router;