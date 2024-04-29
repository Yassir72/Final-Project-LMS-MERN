require("dotenv").config();
const express = require("express");
const app = express();
const cors = require('cors')
const AdminRouter = require('./Routes/AdminRoutes')


app.use(cors())
app.use(express.json())

app.use('/ad',AdminRouter)


app.listen(process.env.Port,()=>{
    console.log("The server is running");
})
