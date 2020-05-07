//管理员模板
const mongoose = require("mongoose");
const adminSchema = new mongoose.Schema({//创建骨架
    adminName :String,  
    adminPassword:String
  }, {versionKey: false});
const adminModel = mongoose.model('admin', adminSchema,"admin");//根据骨架创建模版