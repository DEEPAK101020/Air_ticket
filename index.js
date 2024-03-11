const express=require("express");
const mongoose=require("mongoose")
const jwt=require("jsonwebtoken");
const bodyParser=require("body-parser");
const bcrypt=require("bcrypt");
const {connection}=require("./db")
const {Userrouter}=require("./Routes/user.routes")
const {flightRouter}=require("./Routes/flight.routes")
const {bookingrouter}=require("./Routes/dashboard.routes")

const app=express();
app.use(express.json())

app.use("/user",Userrouter)
app.use("/flight",flightRouter)
app.use("/booking",bookingrouter)

app.get("/",(req,res)=>{
    res.send("this is home page");
})


app.listen(3000,async(req,res)=>{
    try {
        await connection
        console.log("connected to dB");
        console.log("port is running on 3000")
    } catch (error) {
        console.log(error)
    }
})