const express = require('express');
const router = express.Router();


const multer = require("multer");
const path = require("path");
//C:\Users\olin\Desktop\lesson_web\proxyApp\app.js
// 设置为硬盘存储
const storage = multer.diskStorage({
  // 设置文件的存储目录，可以是一个函数或字符串。若未提供该参数，将使用系统的临时目录
  destination: function (req, file, cb) {
    cb(null, path.dirname(module.parent.filename) + "/public/images/uploads"); //文件的存储目录,
  },
  // 设置文件名。若未提供该参数，将使用一个随机字符串，且文件名中不包含扩展名
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname)); //获取后缀和时间戳进行拼接，来命名上传后的文件
  }
});
const upload = multer({
  storage
})
router.post('/uploadFile', upload.single("img"), async function (req, res, next) {
  res.send({
    err: null,
    filePath: 'images/uploads/' + path.basename(req.file.path) //获取路径中文件的名称
  });
});

module.exports = router;