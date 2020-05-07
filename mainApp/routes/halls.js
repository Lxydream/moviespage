var express = require('express');
var router = express.Router();
const hallsService=require("../service/hallsService");


router.post('/posthalls', async function (req, res, next) {
    const data = await hallsService.gethalls();
    res.send(data);
  });
  router.get('/', async function (req, res, next) {
    // console.log(111);
    // const tt=req.query;
    const data = await hallsService.getHalls();
    res.send(data);
});
  module.exports=router;