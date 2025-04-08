const express = require("express");
const dotenv = require("dotenv").config();

const app = express();

const port = process.env.PORT || 5000;

app.listen(port, ()=>{
    console.log(`Server running in port : ${port}`)
})