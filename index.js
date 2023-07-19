// console.log("kaniskaa")
const dbConnect = require("./config/config");
// const error = require("./errorHandler/handle_error")
const express = require("express");
const cors=require("cors")
//dynamically linking a port 
const dotenv = require("dotenv").config();
const port = process.env.PORT;
dbConnect();
const app = express();

app.use(express.json());
app.use(cors())

app.use("/", require("./controllers/Admission"));
app.use("/", require("./controllers/Notices"));
app.use("/", require("./controllers/Resources"));


// app.use("/api/users", require("./configServer/config_users"));



app.listen(port, ()=>
{
    console.log(`running in ${port}`);
})