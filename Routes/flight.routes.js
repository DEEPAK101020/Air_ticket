const express=require("express");
const {FlightModel}=require("../Models/flight.model")
const {auth}=require("../middleware/auth")
const flightRouter=express.Router();


flightRouter.get("/api/flights",async(req,res)=>{
    try {
        const flight=await FlightModel.find();
        res.status(200).json(flight)
    } catch (error) {
        res.status(500).json({error:error})
    }
})

//get by id

flightRouter.get("/:id",async(req,res)=>{
    try {
        const flight=await FlightModel.findById(req.params.id)
        if(!flight){
            return res.status(404).send("flight not found")
        }
        res.status(200).json(flight)
    } catch (error) {
        res.status(200).json({error:error});
    }
})


//post