require("dotenv").config();
const express = require("express");
const cors = require("cors")
const app = express();

const studentrouter=require('./Routes/StudentRoutes');
const adminRouter=require('./Routes/AdminRoutes');
const insRouter=require('./Routes/InstructorRoutes');
const courseRouter=require('./Routes/CourseRoutes');
const categoryRouter=require('./Routes/CategoryRoutes');
const {logging} = require('./Routes/Api');


app.use(express.json())
app.use(cors({origin:"http://localhost:5173",credentials:true}))

app.use(logging);

app.use('/student',studentrouter)
app.use('/admin',adminRouter)
app.use('/instructor',insRouter)
app.use('/course',courseRouter)
app.use('/category',categoryRouter)



app.listen(process.env.Port,()=>{
    console.log("The server is running");
});
