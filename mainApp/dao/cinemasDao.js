const cinemasModel = require("./models/cinemasModel");
const getcinemas=async ()=>{
    let data = await cinemasModel.find();
    return data
}
const removecinemas=async (cinemas)=>{
    const data = await cinemasModel.deleteOne({
        _id: cinemas._id
        // cname: remMov.cname
    });
    return data;
}
const modifycinemas = async (cinemas) => {
    const data = await cinemasModel.update({
        _id: cinemas._id
    }, cinemas);
    return data
}
const addcinemas = async (cinemas) => {
    console.log(cinemas);
    const data = await cinemasModel.create(cinemas);
    return data
}
module.exports={getcinemas,removecinemas,modifycinemas,addcinemas}