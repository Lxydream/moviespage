//资讯
const mongoose = require("mongoose");
const consultingsSchema = new mongoose.Schema({
    // id : String, // mongodb 自动生成的 id
    title: String,
    time: String,
    picture: String,
    comment: String,
    text: String
}, {
    versionKey: false
});
const consultingsModel = mongoose.model('consultings', consultingsSchema, "consultings"); //根据骨架创建模版
// module.exports = consultingsModel;