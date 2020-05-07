const express = require("express");
const router = express.Router();
const consultingsService = require("../service/consultingsService");

router.get('/', async function (req, res, next) {
    const data = await consultingsService.getConsultings();
    // console.log(11);

    res.send(data);
})

// 删除
router.delete('/', async function (req, res, next) {
    let _id = req.body;
    const data = await consultingsService.deleteConsulting(_id);
    // console.log(data);

    res.send(data);
});
// 新增

router.post('/', async function (req, res, next) {
    const Consulting = req.body;
    // console.log(Consulting);
    const data = await consultingsService.insertConsulting(Consulting);
    // console.log(data);

    res.send(data)
})

//更新
router.put('/', async function (req, res, next) {
    const consulting = req.body;
    const data = await consultingsService.updateConsulting(consulting);
    // console.log(data);
    res.send(data)
})
module.exports = router;