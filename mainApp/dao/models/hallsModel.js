//放映厅模板（关联影院）
const mongoose = require("mongoose");
const hallsSchema = new mongoose.Schema({ //
    name: String, // 放映厅名字
    status: Boolean, // 放映厅是否营业（可选）
    cinemasId: {type:mongoose.Schema.Types.ObjectId,ref:'cinemas'} // 放映厅从属的影院 id
}, {
    versionKey: false
});
const hallsModel = mongoose.model('halls', hallsSchema, "halls"); //根据骨架创建模版
module.exports = hallsModel;