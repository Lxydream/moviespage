//用户模板
const mongoose = require("mongoose");
const usersSchema = new mongoose.Schema({//创建骨架
    userName: String,
    userPassword: String,
    phone: String,
    mail: String
}, { versionKey: false });
const usersModel = mongoose.model('users', usersSchema, "users");//根据骨架创建模版