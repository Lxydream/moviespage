const usersDao =require("../dao/usersDao");
const creat=async ()=>{
    let data =await usersDao.creatUser();
    return data
}
const add=async (user)=>{
    // let data = await usersDao.creatUser({ phone : user.phone  })
    // console.log(user);
    let data =await usersDao.addUser(user);
    return data;
    // if (data.length > 0) {
    //     return {
    //         isadd: false
    //     };
    // }else{
        // let data =await usersDao.addUser(user);
        // return {
        //     isadd: true,
        //     user: data
        // };
}
const up=async (user)=>{
    let data =await usersDao.upUser(user);
    return data
}
const Deleteuser=async (user)=>{
    let data =await usersDao.deleteUser(user);
    return data
}
module.exports={creat,add,up,Deleteuser}