//==============数据库
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/maoyan", { useNewUrlParser: true ,useUnifiedTopology:true});
mongoose.connection.on("connected", function () {
  console.log("mongoose is ok of maoyan!已经连接上");
})
require("./models/chipformationModel");
require("./models/moviesModel");
require("./models/hallsModel");
require("./models/cinemasModel");
require("./models/adminModel");
require("./models/usersModel");
require("./models/seatsModel");
require("./models/consultingModel");

