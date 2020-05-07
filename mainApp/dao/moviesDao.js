const mongoose = require("mongoose");
const moviesModel = mongoose.model("movies");
const getMovies = async () => {
    const row = await moviesModel.find();
    const count = await moviesModel.find().sort({count:-1});
    const wantSee = await moviesModel.find().sort({wantSee:-1});
    const score = await moviesModel.find().sort({score:-1})
    // const count = await studentsModel.countDocuments();
    // .limit(pager.pageSize).skip((pager.pageNum-1)*pager.pageSize)
    return {row,count,wantSee,score};
}
const addMovie = async (addMov) => {
    const data = await moviesModel.create(addMov);
    return data
}
const removeMovie = async (remMov) => {
    const data = await moviesModel.deleteOne({
        _id: remMov._id
        // cname: remMov.cname
    });
    return data;
}
const modifyMovie = async (modifyMov) => {
    const data = await moviesModel.update({
        _id: modifyMov._id
    }, modifyMov);
    return data
}
const getmovies=async ()=>{
    let data = await moviesModel.find();
    return data
}
const searchMovies = async (searchMov) => {
    const data = await moviesModel.find(searchMov)
    return data
}
// const searchMovie=asn
module.exports = {
    getMovies,
    addMovie,
    removeMovie,
    modifyMovie,
    getmovies,
    searchMovies
}