const express=require("express");
const bcrypt=require("bcrypt");

const jwt=require("jsonwebtoken");
const Userrouter=express.Router();
require("dotenv").config();

const {UserModel}=require("../Models/user.model");
const { error } = require("console");

Userrouter.post("/register",async(req,res)=>{
    const {name,email,password}=req.body;
    try{
        
         const present=await UserModel.findOne({email}) 
         if(present){
            res.status(401).json({message: "user already registered"})
         }
         bcrypt.hash(password,5,async(err,hash)=>{
            const user=new UserModel({name,email,password:hash})
            await user.save();
            res.status(201).json({message: "mew user registered"})
         })
        }
    catch(err){
        res.status(500).json({err: err})
    }
})

//
Userrouter.post("/login",async(req,res)=>{
    const {email,password}=req.body;
    try {
        const user=await UserModel.findOne({email});
        if(user){
            bcrypt.compare(password,user.password,(err,pass)=>{
                if(error){
                    return res.status(401).json({msg:"user does not exist"})

                }
                if(pass){
                    const secret_key=process.env.secret_key;
                    const token=jwt.sign({userID:user_id},secret_key,{expiresIn:"7d"})
                }
            })
        }
        else{
            res.status(400).json({msg:"user does not exist"})

        }
    } catch (error) {
        res.status(500).json({err: err})
    }
})
module.exports={
    Userrouter
}