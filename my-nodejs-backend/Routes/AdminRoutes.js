const {signIn,addAdmin,UpdateAdmin,deleteAdmin,getAllAdmins} = require('../Controllers/Users/AdminController');
const {auth,validation} = require('../Middlewares/authMiddlware')
const Router = require('express').Router();

Router.get('/getAdmins', getAllAdmins);
Router.post('/login', signIn);
Router.post('/addAdmin', addAdmin);
Router.post('/delAdmin', deleteAdmin);
Router.put('/updateAdmin', UpdateAdmin);

module.exports=Router;







