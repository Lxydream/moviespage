const hallsModel = require("./models/hallsModel");
const getHalls = async () => {
    const data = await hallsModel.find();
    return data;
};
const gethalls=async ()=>{
    let data = await hallsModel.find();
    return data
}
module.exports={gethalls,getHalls}