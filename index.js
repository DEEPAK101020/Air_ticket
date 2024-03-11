const express=require("express");
const mongoose=require("mongoose")
const jwt=require("jsonwebtoken");
const bodyParser=require("body-parser");
const bcrypt=require("bcrypt");
const {connection}=require("./db")
const {Userrouter}=require("./Routes/user.routes")

const app=express();


app.use("/user",Userrouter)

app.listen(3000,async(req,res)=>{
    try {
        await mongoose.connection
        console.log("connected to dB");
        console.log("port is running on 3000")
    } catch (error) {
        console.log(error)
    }
})