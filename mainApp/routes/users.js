var express = require('express');
var router = express.Router();
const usersService=require("../service/usersService")
/* GET users listing. */
router.get('/getusers', async function(req, res, next) {
  let data=await usersService.creat()
  res.send(data)
});
router.post('/adduser', async function(req, res, next) {
  const user=req.body
  let data=await usersService.add(user)
  res.send(data)
});
router.post('/upuser', async function(req, res, next) {
  const user=req.body
  // console.log(user);
  let data=await usersService.up(user)
  res.send(data)
});
router.post('/deleteuser', async function(req, res, next) {
  const user=req.body
  let data=await usersService.Deleteuser(user)
  res.send(data)
});
module.exports = router;
