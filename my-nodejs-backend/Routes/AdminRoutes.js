const {signIn,addAdmin,UpdateAdmin,deleteAdmin,getAllAdmins} = require('../Controllers/Users/AdminController');
const {auth,validation} = require('../Middlewares/authMiddlware')
const Router = require('express').Router();

Router.get('/getAdmins', getAllAdmins);
Router.post('/login', signIn);
Router.post('/addAdmin',auth, addAdmin);
Router.delete('/delAdmin',auth, deleteAdmin);
Router.put('/updateAdmin',auth, UpdateAdmin);

module.exports=Router;







