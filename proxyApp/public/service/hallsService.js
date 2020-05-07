export default {
    getPiece:()=>new Promise(resolve=>{
        $.ajax({
            url:"./api/halls/posthalls",
            type:"post",
            success(data){
                resolve(data);
            }
        })
    }),
    getHalls:()=>new Promise(resolve=>{
        $.ajax({
            url: "./api/halls/",
            type: "get",
            success(data) {
               resolve(data);
            }
        })
    })
}