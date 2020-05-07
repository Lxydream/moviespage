const chipformationModel = require("./models/chipformationModel");
const moviesModel = require('./models/moviesModel');
const cinemasModel = require('./models/cinemasModel');
const hallsModel = require('./models/hallsModel');

const getchipformation = async () => {
    let data = await chipformationModel.find().populate("movieId", ["_id","cname", "type", "upDate", "director", "actor"]).populate("cinemasId", ["_id","name"]).populate("theaterId", ["_id","name"]);
    // console.log(data);
    
    data = data.map(v => ({
        _id: v._id,
        price: v.price,
        showTime: v.showTime,
        cname: v.movieId.cname,
        actor: v.movieId.actor,
        type: v.movieId.type,
        upDate: v.movieId.upDate,
        director: v.movieId.director,
        namae1: v.cinemasId.name,
        namae: v.theaterId.name,
        movieId:v.movieId._id,
        cinemasId:v.cinemasId._id,
        theaterId:v.theaterId._id,

    }))
    
    return data;
}
const deletechipformation = async (moves) => {
    let data = await chipformationModel.deleteOne({
        _id: moves._id
    });
    return data
}
const getOnePiece = async (dataOne) => {
    // console.log(dataOne);

    let dataMovie = await moviesModel.find({
        cname: '神奇女侠'
    });
    // console.log(dataMovie);

    let data = await chipformationModel.find({movieId:"5e15773627d4fcf92b725053"}).populate("movieId", ["cname", "type", "upDate", "director", "actor"]).populate("cinemasId", ["name"]).populate("theaterId", ["name"]);;
    data = data.map(v => ({
        _id: v._id,
        price: v.price,
        showTime: v.showTime,
        cname: v.movieId.cname,
        actor: v.movieId.actor,
        type: v.movieId.type,
        upDate: v.movieId.upDate,
        director: v.movieId.director,
        namae1: v.cinemasId.name,
        namae: v.theaterId.name
    }));
    // console.log(data);

    return data;
}
const createhipformation = async (movies) => {
    let data = await chipformationModel.create({
        movieId: movies.cname,
        cinemasId: movies.namae1,
        theaterId: movies.namae,
        showTime: movies.showTime,
        price: movies.price
    });
    return data
}
const updatehipformation = async (movies) => {
    let data = await chipformationModel.update({
        _id: movies._id
    }, {
        movieId: movies.cname,
        cinemasId: movies.namae1,
        theaterId: movies.namae,
        showTime: movies.showTime,
        price: movies.price
    });
    return data
}

module.exports = {
    getchipformation,
    deletechipformation,
    createhipformation,
    updatehipformation,
    getOnePiece
}