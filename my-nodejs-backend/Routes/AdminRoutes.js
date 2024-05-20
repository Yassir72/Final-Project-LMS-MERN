const {signIn,addAdmin,UpdateAdmin,deleteAdmin,getAllAdmins,getAdminById} = require('../Controllers/Users/AdminController');
const {auth,validation} = require('../Middlewares/authMiddlware')
const Router = require('express').Router();

Router.get('/getAdmins', getAllAdmins);
Router.get('/getAdminById/:id', getAdminById);
Router.post('/login', signIn);
Router.post('/addAdmin', addAdmin);
Router.post('/delAdmin', deleteAdmin);
Router.put('/updateAdmin', UpdateAdmin);

module.exports=Router;







