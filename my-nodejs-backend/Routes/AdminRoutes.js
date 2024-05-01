const {signIn,addAdmin,UpdateAdmin,deleteAdmin,getAllAdmins} = require('../Controllers/Users/AdminController');
const {auth,validation} = require('../Middlewares/authMiddlware')
const RouterAdmin = require('express').Router();

RouterAdmin.get('/getAdmins', getAllAdmins);
RouterAdmin.post('/login', signIn);
RouterAdmin.post('/addAdmin',auth, addAdmin);
RouterAdmin.delete('/delAdmin',auth, deleteAdmin);
RouterAdmin.put('/updateAdmin',auth, UpdateAdmin);


module.exports = RouterAdmin






