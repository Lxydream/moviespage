//座位（关联放映厅）
const mongoose = require("mongoose");
const seatsSchema = new mongoose.Schema({
    // id : String, // mongodb 自动生成的 id
    name: String, // 
    status: Boolean, // 
    cinemasId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'seats'
    }, // 座位从属的放映厅 id
}, {
    versionKey: false
});
const seatsModel = mongoose.model('seats', seatsSchema, "seats"); //根据骨架创建模版
module.exports = seatsModel;