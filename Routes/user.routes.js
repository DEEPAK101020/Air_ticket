const express=require("express");
const bcrypt=require("bcrypt");

const jwt=require("jsonwebtoken");
const Userrouter=express.Router();

const {UserModel}=require("../Models/user.model")

Userrouter.post("/register",(req,res)=>{
    const {name,email,password}=req.body;
    try{
        
        bcrypt.hash(password,5,async(err,hash)=>{
            if(hash){
                const regesteruser=new UserModel({name,email,password:hash})
                await regesteruser.save();
                res.status(201).json({msg:"new user registered"})
            }
        })
    }catch(err){
        res.status(500).json({err: err})
    }
})
module.exports={
    Userrouter
}