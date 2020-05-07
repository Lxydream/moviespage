const seatsDao = require("../dao/seatsDao");
const getSeats = async () => {
const data=await seatsDao.getSeats();
return data;
}
module.exports = {
    getSeats
}