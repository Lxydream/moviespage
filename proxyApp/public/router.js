import mainPage from "./view/mainPage.js";
import moviesManage from "./view/moviesManage.js"
import chipformation from "./view/chipformation.js";
import Login from "./view/login.js"
import Register from "./view/register.js"
import info from "./view/info.js"
import GetConsulting from './view/consultings/getConsultings.js'
// import get
var routes = {
    '/mainPage': function () {
        new mainPage({
            el: "#root"
        });
    },
    // '/chipformation': function () {
    //     new chipformation({
    //         el: "#root"
    //     })
    // },
    '/login': function () {
        new Login({
            el: "#root"
        }); //在root节点下面显示login页面
    },
    '/register': function () {
        new Register({
            el: "#root"
        });
    },
    // '/info':function(){
    //     new  info({
    //         el:"#root"
    //     })
    // },
    // '/getConsulting': {
    //     on: function () {
    //         new GetConsulting({
    //             el: "#root"
    //         })
    //     },
        
    // }
};

var router = Router(routes);

router.init();

export default {
    init() {
        router.init();
        location.hash = location.hash || "/login";
    }
}