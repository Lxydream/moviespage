//排片（关联电影，影院，放映厅）
const mongoose=require("mongoose")
const chipformationSchema = new mongoose.Schema({ //创建骨架
  movieId:{type:mongoose.Schema.Types.ObjectId,ref:'movies'},
  cinemasId:{type:mongoose.Schema.Types.ObjectId,ref:'cinemas'},
  theaterId : {type:mongoose.Schema.Types.ObjectId,ref:'halls'},
  showTime:String,
  price:Number
  }, {
    versionKey: false
  });
  const chipformationModel = mongoose.model("chipformation", chipformationSchema, "chipformation"); //根据骨架创建模板
  module.exports=chipformationModel;
