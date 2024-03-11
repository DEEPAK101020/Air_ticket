const express=require("express");
const dashboardRoute=express.Router();
const {BookingModel}=require("../Models/booking.model")
const {auth}=require("../middleware/auth")


const bookingrouter=express.Router();
bookingrouter.post("/api/booking",auth,async(req,res)=>{
    try {
        const {flightid}=req.body;
        const booking=new BookingModel({
            user:req.body.user,
            fligh:flightid
        })
        await booking.save();
        res.status(201).send("booking sucessfull")
    } catch (error) {
        res.status(500).send(error)
    }

})

bookingrouter.get("/api/dashboard",auth,async(req,res)=>{
    
})
module.exports={
    bookingrouter
}
