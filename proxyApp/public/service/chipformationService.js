export default {
    getPiece:()=>new Promise(resolve=>{
        $.ajax({
            url:"./api/chipformation/postchipformation",
            type:"post",
            success(data){
                // console.log(data);
                
                resolve(data);
            }
        })
    }),
    deletePiece:(num)=>new Promise(resolve=>{
        $.ajax({
            url:"./api/chipformation/deletechipformation",
            type:"post",
            data:{_id:num},
            success(data){
                resolve(data);
            }
        })
    }),
    addPiece:(movie)=>new Promise(resolve=>{
        $.ajax({
            url:"./api/chipformation/creatchipformation",
            type:"post",
            data:movie,
            success(data){
                resolve(data);
            }
        })
    }),
    gxPiece:(movie1)=>new Promise(resolve=>{
        $.ajax({
            url:"./api/chipformation/updatechipformation",
            type:"post",
            data:movie1,
            success(data){
                resolve(data);
            }
        })
    })
}