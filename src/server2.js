const express = require('express');
// 
const app = express()
//specify the format will be json
app.use(express.json())
app.use(express.static('public'))
const port = 3000

//connect the mongo db database
const mongoose = require('mongoose')
require('dotenv').config()

//connection
const connection = async()=>{
    try{
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log("mongo db database connected successfully")
    }
    catch(error){
        console.error("MongoDB connection failed:", error);
        process.exit(1);
    }
}
connection();
// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })