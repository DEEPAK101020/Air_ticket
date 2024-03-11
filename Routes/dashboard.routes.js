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

//get booking..
bookingrouter.get('/api/dashboard', auth, async (req, res) => {
    try {
      const bookings = await Booking.find({ user: req.body.userID }).populate('user flight');
      res.status(200).json(bookings);
    } catch (error) {
      res.status(500).send(error.message);
    }
});


//put booking 

bookingRouter.put('/api/dashboard/:id', auth, async (req, res) => {
    try {
      const { flightId } = req.body;
      const booking = await Booking.findByIdAndUpdate(
        req.params.id,
        {
          user: req.body.userID,
          flight: flightId
        },
        { new: true }
      );
      if (!booking) return res.status(404).send('Booking not found');
      res.status(204).send('Booking details updated successfully');
    } catch (error) {
      res.status(500).send(error.message);
    }
});
  

//delete 

bookingrouter.delete('/api/dashboard/:id', auth, async (req, res) => {
    try {
      const booking = await Booking.findByIdAndDelete(req.params.id);
      if (!booking) return res.status(404).send('Booking not found');
      res.status(202).send('Booking deleted successfully');
    } catch (error) {
      res.status(500).send(error.message);
    }
});
module.exports={
    bookingrouter
}
