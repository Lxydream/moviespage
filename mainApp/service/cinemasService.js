const cinemasDao=require("../dao/cinemasDao");
const getcinemas=async ()=>{
    let data = await cinemasDao.getcinemas();
    return data
}
const removecinemas=async (cinemas)=>{
    const data = await cinemasDao.removecinemas(cinemas);
    return data;
}
const modifycinemas = async (cinemas) => {
    const data = await cinemasDao.modifycinemas(cinemas);
    return data
}
const addcinemas = async (cinemas) => {
    const data = await cinemasDao.addcinemas(cinemas);
    return data
}
module.exports={getcinemas,removecinemas,modifycinemas,addcinemas}