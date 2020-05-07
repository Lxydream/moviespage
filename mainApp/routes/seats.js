const express = require('express');
const router = express.Router();
const seatsService = require('../service/seatsService');

router.get('/', async function (req, res, next) {
    // const seats = req.body
    const data = await seatsService.getSeats();
    res.send(data);
});
module.exports = router;