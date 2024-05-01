require("dotenv").config();
const express = require("express");
const cors = require("cors")
const routerAdmin = require('./Routes/AdminRoutes')
const {logging} = require('./Routes/Api')
const app = express();


app.use(cors({ origin: 'http://localhost:5173', credentials: true }));
app.use(logging)

app.use(express.json());
app.use('/', routerAdmin);

app.listen(process.env.Port, () => {
    console.log("The server is running");
});
