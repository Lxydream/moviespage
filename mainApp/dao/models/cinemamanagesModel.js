//院线管理模板
const mongoose = require("mongoose");
const cinemamanagesSchema = new mongoose.Schema({ //创建骨架
    movieId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'movies'
    },
    cinemasId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'cinemas'
    },
}, {
    versionKey: false
});

const cinemamanagesModel = mongoose.model("cinemamanages", cinemamanagesSchema, "cinemamanages"); //根据骨架创建模板
module.exports = cinemamanagesModel;