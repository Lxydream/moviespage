var express = require('express');
var router = express.Router();
const chipformationService=require("../service/chipformationService");


router.post('/postchipformation', async function (req, res, next) {
    const data = await chipformationService.getchipformation();
    res.send(data);
  });
 router.post('/deletechipformation', async function (req, res, next) {
    let deletemoves = req.body;
    // console.log(deletemoves);
    const data = await chipformationService.deletechipformation(deletemoves);
    res.send(data);
  });
  // router.post('/addchipformation', async function (req, res, next) {
  //   let addmovies = req.body;
  //   console.log(addmovies);
  //   // const data = await chipformationService.deletechipformation(deletemoves);
  //   // res.send(data);
  // });
//   const createhipformation = async (movies) => {
//     let data =await chipformationModel.create({movieId:movies.cname,cinemasId:movies.namae1,theaterId:movies,namae,showTime,price});
//     return data
// }
router.post('/creatchipformation', async function (req, res, next) {
let creatmovies = req.body;
console.log(creatmovies);
  
const data = await chipformationService.createhipformation(creatmovies);
res.send(data);
});

router.post('/updatechipformation', async function (req, res, next) {
  let updatemovies = req.body;
  const data = await chipformationService.updatehipformation(updatemovies);
  res.send(data);
  });


router.get('/getOneData',async function(req, res, next){
  let dataOne=req.body;
  const data=await chipformationService.getOnePiece(dataOne);
  res.send(data);
})
  module.exports=router;