require("dotenv").config();
const express = require("express");
const cors = require("cors")
const app = express();
const orderRouter=require('./Routes/OrderRoutes')
const studentrouter=require('./Routes/StudentRoutes');
const adminRouter=require('./Routes/AdminRoutes');
const insRouter=require('./Routes/InstructorRoutes');
const courseRouter=require('./Routes/CourseRoutes');
const categoryRouter=require('./Routes/CategoryRoutes');
const usersRouter=require('./Routes/UsersRoutes');
const cartRouter=require('./Routes/cartRoutes')
const {logging} = require('./Routes/Api');

const servers= ["http://localhost:5173","http://localhost:5174"]

app.use(express.json())
app.use(cors({origin: servers ,credentials:true}))


app.use(logging);

app.use('/student',studentrouter)
app.use('/admin',adminRouter)
app.use('/instructor',insRouter)
app.use('/course',courseRouter)
app.use('/order',orderRouter)
app.use('/cart',cartRouter)
app.use('/category',categoryRouter)
app.use('/user',usersRouter)



app.listen(process.env.Port,()=>{
    console.log("The server is running");
});
