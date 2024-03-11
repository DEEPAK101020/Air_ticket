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
Userrouter.post("/login", async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await UserModel.findOne({ email });
        if (user) {
            bcrypt.compare(password, user.password, (err, pass) => {
                if (err) {
                    return res.status(401).json({ msg: "Invalid credentials" });
                }
                if (pass) {
                    const secret_key = process.env.secret_key;
                    const token = jwt.sign({ userID: user._id }, secret_key, { expiresIn: "7d" });
                    res.status(200).json({ token });
                } else {
                    res.status(401).json({ msg: "Invalid credentials" });
                }
            });
        } else {
            res.status(401).json({ msg: "User does not exist" });
        }
    } catch (error) {
        res.status(500).json({ err: error.message });
    }
});

module.exports={
    Userrouter
}