const consultingsDao = require("../dao/consultingsDao");

const getConsultings = async () => {
    const data = await consultingsDao.getConsultings();
    return data;
};

//删除

const deleteConsulting = async (_id) => {
    const data = await consultingsDao.deleteConsulting(_id);
    if (data.deletedCount >= 1) {
        return {
            status: true
        }
    } else {
        return {
            status: false
        }
    }
}

//新增
const insertConsulting = async (consulting) => {
    const data = await consultingsDao.insertConsulting(consulting)
    return (data);
}

//更新
const updateConsulting = async (consulting) => {
    // console.log(consulting);
    
    let data = await consultingsDao.updateConsulting(consulting)
   return data;
}

module.exports = {
    getConsultings,
    deleteConsulting,
    insertConsulting,
    updateConsulting
}