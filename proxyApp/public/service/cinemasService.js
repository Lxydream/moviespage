export default {
    getPiece:()=>new Promise(resolve=>{
        $.ajax({
            url:"./api/cinemas/postcinemas",
            type:"post",
            success(data){
                resolve(data);
            }
        })
    }),
    remPiece:(cinemas)=>new Promise(resolve=>{
        $.ajax({
            url:"./api/cinemas/removecinemas",
            type:"post",
            data:cinemas,
            success(data){
                resolve(data);
            }
        })
    }),
    addPiece:(cinemas)=>new Promise(resolve=>{
        $.ajax({
            url:"./api/cinemas/addcinemas",
            type:"post",
            data:cinemas,
            success(data){
                resolve(data);
            }
        })
    }),
    modifyPiece:(cinemas)=>new Promise(resolve=>{
        $.ajax({
            url:"./api/cinemas/modifycinemas",
            type:"post",
            data:cinemas,
            success(data){
                resolve(data);
            }
        })
    }),
}