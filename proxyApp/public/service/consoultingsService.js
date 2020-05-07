export default {
    getConsultings: () => new Promise(resolve => {
        $.ajax({
            url: "./api/consultings/",
            type: "get",
            success(data) {
                resolve(data);
            }
        })
    }),
    deleteConsulting: (_id) => new Promise(resolve => {
        $.ajax({
            url: "./api/consultings/",
            type: "delete",
            data:{_id},
            success(data) {
                resolve(data);
            }
        })
    }),
    addConsulting: (consulting) => new Promise(resolve => {
        $.ajax({
            url: "./api/consultings/",
            type: "post",
            data:consulting,
            success(data) {
                resolve(data);
            }
        })
    }),
    updateConsulting:(consulting,_id)=>new Promise(resolve=>{
        $.ajax({
            url: "./api/consultings/",
            type: "put",
            data: consulting+`&_id=${localStorage.getItem("_id")}`,
            success(data) {
                resolve(data)
            }
        });
    }),
    upload:(fd)=>new Promise(resolve=>{//fd就是一个装有文件的DataForm对象
        $.ajax({
            url: "./consultings/uploadFile",
            type: "post",//*** 
            cache: false,
            data: fd,//*** 
            contentType: false,//*** 
            processData: false,//*** 
            success(data) {
                resolve(data);
            }
        })
    })
}