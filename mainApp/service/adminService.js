const adminDao = require("../dao/adminDao");
const login = async (admin) => {
    let data = await adminDao.getadmin(admin)
  
    if (data.length > 0) {
        return {
            isLogin: true
        };
    } 

    
    else {
        return {
            isLogin: false
        };
    }
}
const register = async (admin) => {
    let data = await adminDao.getadmin({ adminName: admin.adminName })

    if (data.length > 0) {
        return {
            isregister: false
        };
    } else {
        const data = await adminDao.createadmin(admin)
        return {
            isregister: true,
            admin: data
        };
    }
}
module.exports = { login, register }