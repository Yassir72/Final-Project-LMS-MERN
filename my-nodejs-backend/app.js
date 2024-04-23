require("dotenv").config();
const express = require("express");
const app = express();
const router = require('./Routes/StudentRoutes')
const {validation,auth}=require('./Middlewares/authMiddleware');
const {register, login, logout, updateStudent, deleteStudent, getStudents, getStudentById}=require('./Controllers/Users/StudentController')



app.use(express.json())
// app.use('/student',router)
app.post('/register',validation,register)
app.post('/login',validation,login)
app.put('/update',auth,updateStudent)
app.delete('/delete',auth,deleteStudent)
app.get('/getStudents',auth,getStudents)
app.get('/getStudents/:id',auth,getStudentById)
app.post('/logout',auth,logout)



app.listen(process.env.Port,()=>{
    console.log("The server is running");
})
