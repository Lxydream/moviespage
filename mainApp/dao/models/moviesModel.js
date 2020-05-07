//电影模板
const mongoose = require("mongoose");
const moviesSchema = new mongoose.Schema({
    cname: String,
    ename: String,
    type: String,
    wantSee: String,
    area: String,
    poster: String,
    years: String,
    time: Number,
    upDate: String,
    score: Number,
    count: Number,
    intro: String,
    isClassic: Boolean,
    director: String,
    actor: [String],
    images: [String]
}, {
    versionKey: false
});
const moviesModel = mongoose.model("movies", moviesSchema, "movies");
module.exports = moviesModel;