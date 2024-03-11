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

flightRouter.post("/api/flight",auth,async(req,res)=>{
    try {
        const { airline,
        flightNo,
        departure,
        arrival,
        departureTime,
        arrivalTime,
        seats,
        price}=req.body;
        const flight=new FlightModel({airline,
            flightNo,
            departure,
            arrival,
            departureTime,
            arrivalTime,
            seats,
            price})
            await flight.save();
            res.status(201).send("new flight added")
    } catch (error) {
        res.status(500).send("error adding flight")
    }
})


//updating the fight
flightRouter.put("/api/flight/:id",auth,async(req,res)=>{
    try {
        const { airline,
        flightNo,
        departure,
        arrival,
        departureTime,
        arrivalTime,
        seats,
        price}=req.body;
        const flight=await FlightModel.findByIdAndUpdate(req.params.id,{airline,
            flightNo,
            departure,
            arrival,
            departureTime,
            arrivalTime,
            seats,
            price},{new:true}
            )
            if(!flight)
            return  res.status(404).send("flight not found");
        else{
            res.status(204).send("flight details updated")
        }
            
    } catch (error) {
        res.status(500).send("error updating flight")
    }
})


//delete

flightRouter.delete("/api/flight/:id",auth,async(req,res)=>{
    try {
        const flight=await FlightModel.findByIdAndDelete(req.params.id);
        if(!flight) return res.status(404).send("flight not found")
        res.status(202).send("flight deleted sucessfully")
    } catch (error) {
        res.status(500).send("error deleteing flight")
    }
})

module.exports={
    flightRouter
}