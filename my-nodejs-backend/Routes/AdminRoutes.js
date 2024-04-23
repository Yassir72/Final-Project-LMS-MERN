const {signIn,addAdmin,UpdateAdmin,deleteAdmin,getAllAdmins}=require('../Controllers/Users/AdminController');
const Router = require('express').Router();

Router.get('/getAdmins',getAllAdmins);
Router.get('/signIn',getAllAdmins);
Router.post('/addAdmin',addAdmin);
Router.delete('/delAdmin',deleteAdmin);
Router.put('/updateAdmin',UpdateAdmin);








