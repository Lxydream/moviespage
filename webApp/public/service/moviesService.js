export default {
    getMovies: () => new Promise(resolve => {
        $.ajax({
            type: "get",
            url: "./api/movies/getmovies",
            success(data) {
                resolve(data)
            }
        })
    }),
    addMovie: (addMov) => new Promise(resolve => {
        $.ajax({
            type: "post",
            url: "./api/movies/addMovies",
            data: addMov,
            success(data) {
                resolve(data);
            }
        })
    }),
    deleteMovie: (deleteMov) => new Promise(resolve => {
        $.ajax({
            type: "post",
            url: "./api/movies/removeMovies",
            data: deleteMov,
            success(data) {
                resolve(data)
            }
        })
    }),
    modifyMovie:(modifyMov)=>new Promise(resolve=>{
        $.ajax({
            type:"post",
            url:"./api/movies/modifyMovies",
            data:modifyMov,
            success(data){
                resolve(data)
            }
       })
    }),
    getPiece:()=>new Promise(resolve=>{
        $.ajax({
            url:"./api/movies/postmovies",
            type:"post",
            success(data){
                resolve(data);
            }
        })
    }),
    searchMovie:(searchCondition)=>new Promise(resolve=>{
        $.ajax({
            type:"post",
            url:"./api/movies/searchMovies",
            data:searchCondition,
            success(data){
                resolve(data)
            }
        })
    }),
    upload:(fd)=>new Promise(resolve=>{
        $.ajax({
            url:"./movies/uploadFile",
            data:fd,//必需
            type:"post",//必需
            cache:false,//必需
            contentType:false,//必需
            processData:false,//必需
            success(data){
                resolve(data)
            }
        })
    })
}