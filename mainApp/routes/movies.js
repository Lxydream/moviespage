const express = require("express");
const router = express.Router();
const moviesService = require("../service/moviesService")
router.get("/getMovies", async function (req, res, next) {
    const data = await moviesService.getMovies();
    res.send(data)
})
router.post("/addMovies", async function (req, res, next) {
    const addM = req.body;
    // console.log(addM);
    addM.time = ~~addM.time;
    addM.score = ~~addM.score;
    const data = await moviesService.addMovie(addM);
    // console.log(data);

    res.send(data)
})
router.post("/removeMovies", async function (req, res, next) {
    const removM = req.body;
    // console.log(removM)
    const data = await moviesService.removeMovie(removM);
    res.send(data)
})
router.post("/modifyMovies", async function (req, res, next) {
    const modifyM = req.body;
    modifyM.time = ~~modifyM.time;
    modifyM.score = ~~modifyM.score;
    const data = await moviesService.modifyMovie(modifyM);
    res.send(data)
})
router.post('/postmovies', async function (req, res, next) {
    const data = await moviesService.getmovies();
    res.send(data);
});
router.post("/searchMovies", async function (req, res, next) {
    const searchM = req.body;
    const data = await moviesService.searchMovies(searchM);
    res.send(data);
})
module.exports = router