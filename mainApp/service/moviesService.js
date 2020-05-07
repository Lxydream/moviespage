const moviesDao = require("../dao/moviesDao");

const getMovies = async () => {
    const data = await moviesDao.getMovies()
    return data
}
const addMovie = async (addMov) => {
    const data = await moviesDao.addMovie(addMov);
    return data
}
const removeMovie = async (remMov) => {
    const data = await moviesDao.removeMovie(remMov);
    return data;
}
const modifyMovie = async (modifyMov) => {
    const data = await moviesDao.modifyMovie(modifyMov);
    return data;
}
const getmovies=async ()=>{
    let data=await moviesDao.getmovies();
    return data
}
const searchMovies=async (searchMovies)=>{
    const data=await moviesDao.searchMovies(searchMovies);
    return data
}
module.exports = {
    getMovies,
    addMovie,
    removeMovie,
    modifyMovie,
    getmovies,
    searchMovies
}