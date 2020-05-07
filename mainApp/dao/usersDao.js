const mongoose = require("mongoose");
const usersModel = mongoose.model("users");
const creatUser=async ()=>{
    const data = await usersModel.find();
    return data
}
const addUser=async (user)=>{
    // console.log(user);
    
    const data = await usersModel.create(user);
    return data
}
const upUser=async (user)=>{
    // console.log(user);
    
    const data = await usersModel.update({_id:user._id},user);
    return data
}
const deleteUser=async (user)=>{
    const data = await usersModel.deleteOne({_id:user._id});
    return data
}
module.exports={creatUser,addUser,upUser,deleteUser}