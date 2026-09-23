//Gre7T1RSe1q8RGev
const express = require('express');
 
const app = express()
//specify the format will be json
app.use(express.json())
app.use(express.static('public'))
const port = 3000
//connect the mongo db database
// const dns = require('dns');
// dns.setServers([
//     '8.8.8.8',
//     '1.1.1.1'
// ]);

const mongoose = require('mongoose')
require('dotenv').config()

//importing user Schema
const User = require('./models/User')

//make a route
app.post('/create/user',async(req,res,next)=>{
try{
    //Create a user
    const user = await User.create(req.body);//Save user in database
    //create promise with success and failure
    res.status(201).json({
        "success":true,
        data:user
    })
}
catch(error){
res.status(400).json({
    "success":false,
    error:error.message
})
}
})

//read
app.get('/read/user',async(req,res,next)=>{
try{
    const user = await User.find();
    //create promise with success and failure
    res.status(201).json({
        "success":true,
        data:user
    })
}
catch(error){
res.status(400).json({
    "success":false,
    error:error.message
})
}
})

//delete
app.delete('/delete/user/:id',async(req,res,next)=>{
try{
    const user = await User.findByIdAndDelete(req.params.id);
    //create promise with success and failure
    res.status(201).json({
        "success":true,
        data:user
    })
}
catch(error){
res.status(400).json({
    "success":false,
    error:error.message
})
}
})

//update
app.put('/update/user/:id',async(req,res,next)=>{
try{
    const user = await User.findByIdAndUpdate(req.params.id,req.body);
    //create promise with success and failure
    res.status(201).json({
        "success":true,
        data:user
    })
}
catch(error){
res.status(400).json({
    "success":false,
    error:error.message
})
}
})

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
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})