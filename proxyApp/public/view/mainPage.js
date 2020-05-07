import Chipformation from "./chipformation.js"
import Movies from "./moviesManage.js"
import Info from "./info.js"
import Cinemas from "./cinemas.js"
import Consultings from "./consultings/getConsultings.js"
export default class mainPage {
    constructor({ el }) {
        this.el = el;
        this.init();
    }
    init() {
        this.render();
        this.parse();
        this.handle();
    }
    parse() {
        $.parser.parse($("#mainPage"))
    }
    render() {
        const template = `<div id="mainPage">
        <div id="main" class="easyui-layout" style="width:100%;height:100%;">
            <div data-options="region:'north',title:'',split:true"
                style="height:100px;line-height: 2;background-color: #04233c;text-align: center;">
                <h1 style="font-size: 40px;margin: 0;color: #def2f1;display: inline;">猫眼后台管理系统</h1>&emsp;
                <h2 style="color: #def2f1;display: inline;"> Cat's eye backstage system</h2>
            </div>
            <div data-options="region:'south',title:'开发人员',split:true" style="height:100px;background-color: #053257;">
                <p style="padding:10px 30px;font-size: 16px;color: #d4e2e7;margin: 0;font-weight: bold;">冯乔 李政 卢琴 张能军
                    任俊龙 刘轩</p>
            </div>
            <div data-options="region:'west',title:'管理菜单',split:true" style="width:15%;background-color: #032541;">
                <ul class="listManage">
                    <li data-type="usersManager">用户管理</li>
                    <li data-type="infoManager">资讯管理</li>
                    <li data-type="moviesManager">电影管理</li>
                    <li data-type="yuanManager">院线管理</li>
                    <li data-type="paiManager">排片管理</li>
                </ul>
            </div>
            <div data-options="region:'center',border:false" style="width:85%;background: #04233c;">
            <div class="easyui-tabs chooseCard" style="width:100%;height:100%">
            <div title="欢迎界面" data-options="closable:true" style="padding:20px;display:none;background-image: url('../images/bgindex.jpg');background-size: 100% 100%;background-position: center center;">
                <div id="#tootd">
                    <h1 style="color: #feffff;font-size: 40px;">欢迎来到猫眼后台系统</h1>
                    <h2 style="color: #feffff;">Welcome to the cat's eye backstage system</h2>
                </div>
            </div>
            </div>
            </div>
        </div>
    </div>`
        $(this.el).html(template);
        $("#mainPage").css({
            width: innerWidth - 50 + "px",
            height: innerHeight - 50 + "px"
        });
        $("body").css("background","none");
    }
    handle() {
        $("#mainPage .listManage li").on("click", function () {
            let $this = $(this);
            let model;
            let chooseType = $this[0].dataset.type;
            
            if (!$(".chooseCard").tabs("exists", `${$this.text()}`)) {
                $('.chooseCard').tabs('add', {
                    title: `${$this.text()}`,
                    selected: true,
                    id: chooseType,
                    closable: true,
                    cache: true,
                });
            } else {
                $(".chooseCard").tabs("select", `${$this.text()}`)
            }
            if ($(this).text() == "用户管理") {
                model = new Info({ el: $(`#${chooseType}`) });
            }
            if ($(this).text() == "资讯管理") {
                model = new Consultings({ el: $(`#${chooseType}`) });
            }
            if ($(this).text() == "电影管理") {
                model = new Movies({ el: $(`#${chooseType}`) });
            }
            if ($(this).text() == "院线管理") {
                model = new Cinemas({ el: $(`#${chooseType}`) });
            }
            if ($(this).text() == "排片管理") {
                model = new Chipformation({ el: $(`#${chooseType}`) });
            }
            // $.parser.parse($(`#${chooseType}`));

            $(`#${chooseType}`).tabs({
                content: model
            })
        })
    }
} 