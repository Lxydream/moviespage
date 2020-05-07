var express = require('express');
var router = express.Router();
const cinemasService = require("../service/cinemasService");


router.post('/postcinemas', async function (req, res, next) {
  const data = await cinemasService.getcinemas();
  res.send(data);
});
router.post('/removecinemas', async function (req, res, next) {
  let cinemas = req.body;
  const data = await cinemasService.removecinemas(cinemas);
  res.send(data);
});
router.post('/addcinemas', async function (req, res, next) {
  let cinemas = req.body;
  console.log(cinemas);
  
  const data = await cinemasService.addcinemas(cinemas);
  res.send(data);
});
router.post('/modifycinemas', async function (req, res, next) {
  let cinemas = req.body;
  const data = await cinemasService.modifycinemas(cinemas);
  res.send(data);
});
module.exports = router;