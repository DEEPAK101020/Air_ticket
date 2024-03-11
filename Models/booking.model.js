const mongoose=require("mongoose");
const BookingSchema=mongoose.Schema({
    user : { type: mongoose.Schema.Types.ObjectId, ref: 'user' },
    flight : { type: mongoose.Schema.Types.ObjectId, ref: 'flight' }
},
{
    versionKey:false
})
const BookingModel=mongoose.model("book",BookingSchema);

module.exports={
    BookingModel
}