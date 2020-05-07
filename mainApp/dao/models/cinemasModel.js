//影院模板
const mongoose = require("mongoose");
const cinemasSchema = new mongoose.Schema({ 
    name: String,
    address: String,
    website: String,
    phone: String,
    status: Boolean
}, {
    versionKey: false
});
const cinemasModel = mongoose.model('cinemas', cinemasSchema, "cinemas"); //根据骨架创建模版
module.exports = cinemasModel;