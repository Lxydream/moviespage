const mongoose = require("mongoose");
const consultingsModel = mongoose.model("consultings");

const getConsultings = async () => {
    const data = await consultingsModel.find();
    return data;
}
// 删除
const deleteConsulting = async (_id) => {
    // console.log(_id);

    const data = await consultingsModel.deleteOne({
        "_id": _id
    });
    // console.log(data);
    return data;
}

//新增
const insertConsulting = async (consulting) => {
    const data = await consultingsModel.create(consulting);
    // console.log(consulting);
    // console.log("11", data);
    return data;
}
//更新
const updateConsulting = async (consulting) => {

    
    const data = await consultingsModel.update({
        _id: consulting._id
    }, consulting);
    // console.log(66666, consulting);
    return data;
}

module.exports = {
    getConsultings,
    deleteConsulting,
    insertConsulting,
    updateConsulting
}