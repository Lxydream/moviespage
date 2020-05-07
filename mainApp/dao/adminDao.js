const mongoose = require("mongoose");
const adminModel = mongoose.model("admin");
const  getadmin= async (admin)=>{
    const data = await adminModel.find(admin);
    // console.log(data)
    return data;
   
}
const  createadmin= async (admin)=>{
    const data = await adminModel.create(admin);
   return data
}
module.exports={getadmin,createadmin}