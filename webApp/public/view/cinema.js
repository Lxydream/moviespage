import Base from "./base.js";
import cinemaService from "../service/cinemaService.js"
import movieId from "./movieId.js"
export default class extends Base {
    render() {
        const template = this.headPage + `
        <div id="cinemasAll" style="overflow: hidden;">
        <div class="main">
            <article>
                <!-- 电影详细分类 -->
                <div class="lei">
                    <ul class="lei_1">
                        <li>
                            <div>
                                品牌：
                            </div>
                            <ul class="lei_2">
                                <li>
                                    <input type="radio" id="pingpai1" name="leixing" checked>
                                    <label for="pingpai1">
                                        <a>全部</a>
                                    </label>
                                    <input type="radio" id="pingpai2" name="leixing">
                                    <label for="pingpai2">
                                        <a>万达影城</a>
                                    </label>
                                    <input type="radio" id="pingpai3" name="leixing">
                                    <label for="pingpai3">
                                        <a>太平洋电影城</a>
                                    </label>
                                    <input type="radio" id="pingpai4" name="leixing">
                                    <label for="pingpai4">
                                        <a>星美国际影城</a>
                                    </label>
                                    <input type="radio" id="pingpai5" name="leixing">
                                    <label for="pingpai5">
                                        <a>CGV影城</a>
                                    </label>
                                    <input type="radio" id="pingpai6" name="leixing">
                                    <label for="pingpai6">
                                        <a>橙天嘉禾影城</a>
                                    </label>
                                    <input type="radio" id="pingpai7" name="leixing">
                                    <label for="pingpai7">
                                        <a>横店电影城</a>
                                    </label>
                                    <input type="radio" id="pingpai8" name="leixing">
                                    <label for="pingpai8">
                                        <a>金逸影城</a>
                                    </label>
                                    <input type="radio" id="pingpai9" name="leixing">
                                    <label for="pingpai9">
                                        <a>大地影院</a>
                                    </label>
                                    <input type="radio" id="pingpai10" name="leixing">
                                    <label for="pingpai10">
                                        <a>卢米埃影城</a>
                                    </label>
                                    <input type="radio" id="pingpai11" name="leixing">
                                    <label for="pingpai11">
                                        <a>UME国际影城</a>
                                    </label>
                                    <input type="radio" id="pingpai12" name="leixing">
                                    <label for="pingpai12">
                                        <a>SFC上影影城</a>
                                    </label>
                                    <input type="radio" id="pingpai13" name="leixing">
                                    <label for="pingpai13">
                                        <a>保利国际影城</a>
                                    </label>
                                    <input type="radio" id="pingpai14" name="leixing">
                                    <label for="pingpai14">
                                        <a>中影国际影城</a>
                                    </label>
                                    <input type="radio" id="pingpai15" name="leixing">
                                    <label for="pingpai15">
                                        <a>越界影城</a>
                                    </label>
                                    <input type="radio" id="pingpai16" name="leixing">
                                    <label for="pingpai16">
                                        <a>和平影城城</a>
                                    </label>
                                    <input type="radio" id="pingpai17" name="leixing">
                                    <label for="pingpai17">
                                        <a>幸福蓝海国际影城</a>
                                    </label>
                                    <input type="radio" id="pingpai18" name="leixing">
                                    <label for="pingpai18">
                                        <a>雅图数字影院</a>
                                    </label>
                                    <input type="radio" id="pingpai19" name="leixing">
                                    <label for="pingpai19">
                                        <a>新时代影城</a>
                                    </label>
                                    <input type="radio" id="pingpai20" name="leixing">
                                    <label for="pingpai20">
                                        <a>耀莱成龙国际影城</a>
                                    </label>
                                    <input type="radio" id="pingpai21" name="leixing">
                                    <label for="pingpai21">
                                        <a>恒大影城</a>
                                    </label>
                                    <input type="radio" id="pingpai22" name="leixing">
                                    <label for="pingpai22">
                                        <a>峨眉影城</a>
                                    </label>
                                    <input type="radio" id="pingpai23" name="leixing">
                                    <label for="pingpai23">
                                        <a>百丽宫影城</a>
                                    </label>
                                    <input type="radio" id="pingpai24" name="leixing">
                                    <label for="pingpai24">
                                        <a>百老汇影城</a>
                                    </label>
                                    <input type="radio" id="qita" name="leixing">
                                    <label for="qita">
                                        <a>其他</a>
                                    </label>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <div>
                                行政区：
                            </div>
                            <ul class="lei_2">
                                <li>
                                    <input type="radio" id="xingzheng1" name="quyu" checked>
                                    <label for="xingzheng1">
                                        <a>全部</a>
                                    </label>
                                    <input type="radio" id="xingzheng2" name="quyu">
                                    <label for="xingzheng2">
                                        <a>地铁附近</a>
                                    </label>
                                    <input type="radio" id="xingzheng3" name="quyu">
                                    <label for="xingzheng3">
                                        <a>武侯区</a>
                                    </label>
                                    <input type="radio" id="xingzheng4" name="quyu">
                                    <label for="xingzheng4">
                                        <a>郫县</a>
                                    </label>
                                    <input type="radio" id="xingzheng5" name="quyu">
                                    <label for="xingzheng5">
                                        <a>锦江区</a>
                                    </label>
                                    <input type="radio" id="xingzheng6" name="quyu">
                                    <label for="xingzheng6">
                                        <a>双流区</a>
                                    </label>
                                    <input type="radio" id="xingzheng7" name="quyu">
                                    <label for="xingzheng7">
                                        <a>青羊区</a>
                                    </label>
                                    <input type="radio" id="xingzheng8" name="quyu">
                                    <label for="xingzheng8">
                                        <a>成华区</a>
                                    </label>
                                    <input type="radio" id="xingzheng9" name="quyu">
                                    <label for="xingzheng9">
                                        <a>新都区</a>
                                    </label>
                                    <input type="radio" id="xingzheng10" name="quyu">
                                    <label for="xingzheng10">
                                        <a>金牛区</a>
                                    </label>
                                    <input type="radio" id="xingzheng11" name="quyu">
                                    <label for="xingzheng11">
                                        <a>龙泉驿区</a>
                                    </label>
                                    <input type="radio" id="xingzheng12" name="quyu">
                                    <label for="xingzheng12">
                                        <a>金堂县</a>
                                    </label>
                                    <input type="radio" id="xingzheng13" name="quyu">
                                    <label for="xingzheng13">
                                        <a>温江区</a>
                                    </label>
                                    <input type="radio" id="xingzheng14" name="quyu">
                                    <label for="xingzheng14">
                                        <a>崇州市</a>
                                    </label>
                                    <input type="radio" id="xingzheng15" name="quyu">
                                    <label for="xingzheng15">
                                        <a>都江堰市</a>
                                    </label>
                                    <input type="radio" id="xingzheng16" name="quyu">
                                    <label for="xingzheng16">
                                        <a>大邑县</a>
                                    </label>
                                    <input type="radio" id="xingzheng17" name="quyu">
                                    <label for="xingzheng17">
                                        <a>青白江区</a>
                                    </label>
                                    <input type="radio" id="xingzheng18" name="quyu">
                                    <label for="xingzheng18">
                                        <a>邛崃市</a>
                                    </label>
                                    <input type="radio" id="xingzheng19" name="quyu">
                                    <label for="xingzheng19">
                                        <a>简阳市</a>
                                    </label>
                                    <input type="radio" id="xingzheng20" name="quyu">
                                    <label for="xingzheng20">
                                        <a>彭州市</a>
                                    </label>
                                    <input type="radio" id="xingzheng21" name="quyu">
                                    <label for="xingzheng21">
                                        <a>新津县</a>
                                    </label>
                                    <input type="radio" id="xingzheng22" name="quyu">
                                    <label for="xingzheng22">
                                        <a>高新区</a>
                                    </label>
                                    <input type="radio" id="xingzheng23" name="quyu">
                                    <label for="xingzheng23">
                                        <a>蒲江县</a>
                                    </label>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <div>
                                特殊厅：
                            </div>
                            <ul class="lei_2">
                                <li>
                                    <input type="radio" id="teshu1" name="niandai" checked>
                                    <label for="teshu1">
                                        <a>全部</a>
                                    </label>
                                    <input type="radio" id="teshu2" name="niandai">
                                    <label for="teshu2">
                                        <a>IMAX厅</a>
                                    </label>
                                    <input type="radio" id="teshu3" name="niandai">
                                    <label for="teshu3">
                                        <a>CGS中国巨幕厅</a>
                                    </label>
                                    <input type="radio" id="teshu4" name="niandai">
                                    <label for="teshu4">
                                        <a>杜比全景声厅</a>
                                    </label>
                                    <input type="radio" id="teshu5" name="niandai">
                                    <label for="teshu5">
                                        <a>Dolby Cimema厅</a>
                                    </label>
                                    <input type="radio" id="teshu6" name="niandai">
                                    <label for="teshu6">
                                        <a>realD厅</a>
                                    </label>
                                    <input type="radio" id="teshu7" name="niandai">
                                    <label for="teshu7">
                                        <a>realD 6FL厅</a>
                                    </label>
                                    <input type="radio" id="teshu8" name="niandai">
                                    <label for="teshu8">
                                        <a>LUXE巨幕厅</a>
                                    </label>
                                    <input type="radio" id="teshu9" name="niandai">
                                    <label for="teshu9">
                                        <a>4DX厅</a>
                                    </label>
                                    <input type="radio" id="teshu10" name="niandai">
                                    <label for="teshu10">
                                        <a>DTS:X临境音乐厅</a>
                                    </label>
                                    <input type="radio" id="teshu11" name="niandai">
                                    <label for="teshu11">
                                        <a>儿童厅</a>
                                    </label>
                                    <input type="radio" id="teshu12" name="niandai">
                                    <label for="teshu12">
                                        <a>4K厅</a>
                                    </label>
                                    <input type="radio" id="teshu13" name="niandai">
                                    <label for="teshu13">
                                        <a>4D厅</a>
                                    </label>
                                    <input type="radio" id="teshu14" name="niandai">
                                    <label for="teshu14">
                                        <a>巨幕厅</a>
                                    </label>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </article>
        </div>
        <!-- 影院列表 -->
        <div class="liebiao">
            <h3>影院列表</h3>
            <ul class="allYingyuan">
                <!-- 1 -->
                
            </ul>
        </div>
        <!-- 页 -->
        <div class="ye">
        <!-- 翻页 -->
        <div class="movie_odk_page">
        </div>
        </div>
    </div>
        `+ this.footPage;
        $(this.el).html(template);
        this.getPageSize();
        this.getCinemas();
    }

    handle() {
        let that = this;
        let pageSize = 1;
        let j = 0;
        //翻页
        $(".movie_odk_page").on("click", ".pageSize", async function () {
            $(".pageSize").css({
                backgroundColor: "white",
                color: "black"
            })
            $(this).css({
                backgroundColor: "#ef4238",
                color: "#ffffff",
            })
            let data = await cinemaService.getcinemas();
            pageSize = $(this).text() - 0;
            let template = data.map((v, i) => {
                if (15 * (pageSize - 1) <= i && i < 15 * pageSize) return `<li>
                <div>
                    <a href="#" data-id="${v._id}">${v.name}</a>
                    <p>地址：${v.address}</p>
                </div>
                <div>
                    <p>
                        <span>￥</span>
                        <span>${parseInt((Math.random() + 1) * 20)}</span>
                        <span>起</span>
                    </p>
                    <a href="#goupiao">选座购票</a>
                </div>
            </li>`}).join("");
            $(".allYingyuan").html(template);
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        });
        //上一页
        $(".movie_odk_page").on("click", ".upPage", async function () {
            if (pageSize > 1) {
                let data = await cinemaService.getcinemas();
                pageSize -= 1;
                let template = data.map((v, i) => {
                    if (15 * (pageSize - 1) <= i && i < 15 * pageSize) return `<li>
                    <div>
                        <a href="#" data-id="${v._id}">${v.name}</a>
                        <p>地址：${v.address}</p>
                    </div>
                    <div>
                        <p>
                            <span>￥</span>
                            <span>${parseInt((Math.random() + 1) * 20)}</span>
                            <span>起</span>
                        </p>
                        <a href="#goupiao">选座购票</a>
                    </div>
                </li>`}).join("");
                $(".allYingyuan").html(template);
                $(".pageSize").css({
                    backgroundColor: "white",
                    color: "black"
                })
                $(".pageSize").eq(pageSize - 1).css({
                    backgroundColor: "#ef4238",
                    color: "#ffffff",
                })
            } else {
                return false;
            }
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        });

        //下一页
        $(".movie_odk_page").on("click", ".downPage", async function () {
            let data = await cinemaService.getcinemas();
            if (pageSize < parseInt(data.length / 15) + 1) {
                pageSize += 1;
                let template = data.map((v, i) => {
                    if (15 * (pageSize - 1) <= i && i < 15 * pageSize) return `<li>
                    <div>
                        <a href="#" data-id="${v._id}">${v.name}</a>
                        <p>地址：${v.address}</p>
                    </div>
                    <div>
                        <p>
                            <span>￥</span>
                            <span>${parseInt((Math.random() + 1) * 20)}</span>
                            <span>起</span>
                        </p>
                        <a href="#goupiao">选座购票</a>
                    </div>
                </li>`}).join("");
                $(".allYingyuan").html(template);
                $(".pageSize").css({
                    backgroundColor: "white",
                    color: "black"
                })
                $(".pageSize").eq(pageSize - 1).css({
                    backgroundColor: "#ef4238",
                    color: "#ffffff",
                })
            } else {
                return false;
            }
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        });
    }
    async getCinemas() {
        let data = await cinemaService.getcinemas();
        let template = data.map((v, i) => {
            if (i < 15) return `<li>
           <div>
               <a href="#" data-id="${v._id}">${v.name}</a>
               <p>地址：${v.address}</p>
           </div>
           <div>
               <p>
                   <span>￥</span>
                   <span>${parseInt((Math.random() + 1) * 20)}</span>
                   <span>起</span>
               </p>
               <a href="#goupiao">选座购票</a>
           </div>
       </li>`
        }).join("");
        $(".allYingyuan").html(template);
    }
    async getPageSize() {
        let data = await cinemaService.getcinemas();
        let stringSize = "", template;
        if (data.length / 15 > 5) {
            for (let i = 1; i <= 5; i++) {
                let string = `<a data-size="${i}" class="pageSize">${i}</a>`;
                stringSize += string;
            }
            template = ` <a class="upPage">上一页</a>` + stringSize + `<span>...</span>
        <a>${parseInt(data.length / 15) + 1}</a>
        <a class="downPage">下一页</a>`;
        } else {
            for (let i = 1; i <= data.length / 15 + 1; i++) {
                let string = `<a data-size="${i}" class="pageSize">${i}</a>`;
                stringSize += string;
            }
            template = ` <a class="upPage">上一页</a>` + stringSize + `<a class="downPage">下一页</a>`;
        }
        $(".movie_odk_page").html(template);
    }
}