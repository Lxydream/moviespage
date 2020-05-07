const mongoose = require("mongoose");
const seatsModel = mongoose.model("seats");

const getSeats=async ()=>{
    const data=await seatsModel.find();
    return data;
}
module.exports={
    getSeats
}