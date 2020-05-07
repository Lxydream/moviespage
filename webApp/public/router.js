import moviesPage from "./view/moviesPage.js"
import regist from "./view/regist.js"
import login from "./view/login.js"
import index from "./view/index.js"
import topList from "./view/topList.js"
import detailmovie from './view/detailmovie.js';
import cinema from './view/cinema.js';
var routes = {
    '/moviesPage': function () {
        new moviesPage({
            el: "#root"
        });
    },
    '/regist': function () {
        new regist({
            el: "#root"
        });
    },
    '/login': function () {
        new login({
            el: "#root"
        });
    },
    '/index': function () {
        new index({
            el: "#root"
        });
    },
    '/topList': function () {
        new topList({
            el: "#root"
        });
    },
    '/detailmovie': function () {
        new detailmovie({
            el: "#root"
        });
    },
    '/cinema': function () {
        new cinema({
            el: "#root"
        });
    },
}
var router = Router(routes);

export default {
    init() {
        router.init();
        location.hash = location.hash || "/index";
    }
}