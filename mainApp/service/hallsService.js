const hallsDao=require("../dao/hallsDao");
const gethalls=async ()=>{
    let data=await hallsDao.gethalls();
    return data
}
const getHalls = async () => {
    const data = await hallsDao.getHalls();
    return data;
};
module.exports={gethalls,getHalls}