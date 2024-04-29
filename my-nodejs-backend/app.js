require("dotenv").config();
const express = require("express");
const app = express();

const router=require('./Routes/StudentRoutes');
const cors=require('cors')
const adminRouter=require('./Routes/AdminRoutes');
const insRouter=require('./Routes/InstructorRoutes');
const courseRouter=require('./Routes/CourseRoutes');


app.use(express.json())
app.use(cors({origin:"http://localhost:5173",credentials:true}))


app.use('/',router)
app.use('/admin',adminRouter)
app.use('/instructor',insRouter)
app.use('/course',courseRouter)



app.listen(process.env.Port,()=>{
    console.log("The server is running");
})
