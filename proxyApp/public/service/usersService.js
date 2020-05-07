//ajax数据传输
export default {
    creatuser: () => new Promise(resolve => {
        $.ajax({
            url: "./api/users/getusers",
            type: "get",
            success(data) {
                resolve(data);
            }
        })
    }),
    //增加数据
    adduser:(users)=>new Promise(resolve=>{
        $.ajax({
            url: "./api/users/adduser",
            type: "post",
            data:users,
            success(data) {
                resolve(data);
            }
        })
    }),
  //  修改
    upuser:(users)=>new Promise(resolve=>{
        console.log(users);
        
        $.ajax({
            url: "./api/users/upuser",
            type: "post",
            data:users+`&_id=${localStorage.getItem("_id")}`,
            success(data) {
                console.log(data);
                resolve(data);
            }
        })
    }),
   //删除
   deleteuser:(users)=>new Promise(resolve=>{
    $.ajax({
        url: "./api/users/deleteuser",
        type: "post",
        data:{_id:users},
        success(data) {
            resolve(data);
        }
    })
})
}