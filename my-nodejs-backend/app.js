require("dotenv").config();
const express = require("express");
const app = express();
const AdminRouter = require('./Routes/AdminRoutes')



app.use(express.json())

app.use('/',AdminRouter)


app.listen(process.env.Port,()=>{
    console.log("The server is running");
})
