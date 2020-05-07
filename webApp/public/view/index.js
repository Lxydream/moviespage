import Base from "./base.js";
import moviesService from "../service/moviesService.js";
import movieId from "./movieId.js"
export default class extends Base {
    render() {
        const template = this.headPage + `    <div id="indexPage">
        <!-- 首页正文 -->
        <article>
            <!-- 滚动上 -->
            <div class="roll_photo">
                <a> <img src="../images/index_03.png" alt="郭敬明" title="郭敬明"></a>
                <div class="roll_min_photo">
                    <a href="#2"><img src="../images/index_04.png" alt="左方向"></a>
                    <a href="./information.html"><img src="../images/banner_01.png" alt=""></a>
                    <a href="./information.html"><img src="../images/banner_02.png" alt=""></a>
                    <a href="./information.html"><img src="../images/banner_03.png" alt=""></a>
                    <a href="./information.html"> <img src="../images/banner_04.png" alt=""></a>
                    <a href="./information.html"> <img src="../images/banner_05.png" alt=""></a>
                    <a href="./information.html"><img src="../images/banner_06.png" alt=""></a>
                    <a href="#2"><img src="../images/index_05.png" alt="右方向"></a>
                </div>
            </div>

            <!-- 正在上映 -->
            <section class="movie_ing" id="nowhot">
                <!-- 正在上映左边 -->
                <div class="movie_ing_left">
                    <!-- 正在上映左边上 -->
                    <p><span>正在热映</span><a href="#moviesPage">全部</a></p>
                    <!-- 正在上映左边下 -->
                    <div class="hotPlay">
                    </div>
                </div>
                <!-- 正在上映右边 -->
                <div class="movie_ing_right">
                    <div>
                        <!-- top1 -->
                        <p>今日票房</p>
                        <ul class="todayPiao">
                        </ul>
                    </div>
                    <!-- 最后a -->
                    <a href="#12a">
                        <span>今日大盘</span>
                        <div>
                            <p><span>1.03<span>亿</span></span>
                                <span>查看更多 &gt;</span></p>
                            <p><span> 北京时间22:46:26</span><span>猫眼专业版实时票房数据</span></p>
                        </div>
                    </a>
                </div>
            </section>
            <!-- 即将上映 -->
            <section class="movie_ready" id="orderup">
                <!-- 即将上映左边 -->
                <div class="movie_ready_left">
                    <!-- 即将上映左边上 -->
                    <p><span>即将上映</span><a href="#moviesPage">全部&gt;</a></p>
                    <!-- 即将上映左边下 -->
                    <div class="willSeeM">
                    </div>
                </div>
                <!-- 即将上映右边 -->
                <div class="movie_ready_right">
                    <!-- 即将上映右边标题 -->
                    <div>
                        <span>最受期待</span><a href="./toplist.html">查看完整榜单&gt;</a>
                    </div>
                    <!-- 即将上映右边榜单 -->
                    <ul class="wantSeeLi">
                    </ul>
                </div>
            </section>
            <!-- 热播电影 -->
            <section class="hot_movie" id="goodmovie">
                <!--热播电影左边  -->
                <div class="hot_movie_left">
                    <!-- 热播电影左边上 -->
                    <div>
                        <div>
                            <span>热播电影</span>
                            <a href="#moviesPage">爱情</a>
                            <a href="#moviesPage">喜剧</a>
                            <a href="#moviesPage">动作</a>
                            <a href="#moviesPage">恐怖</a>
                            <a href="#moviesPage">动画</a>
                        </div>
                        <a href="#moviesPage">全部&gt;</a>
                    </div>
                    <!-- 热播电影左边下 -->
                    <div class="lastMovie">
                    </div>
                </div>
                <!-- 热播电影右边 -->
                <div class="hot_movie_right">
                    <!-- top100 -->
                    <div><span>TOP 100</span><a href="./toplist.html">查看完整榜单&gt;</a></div>
                    <ul class="lovelyBaby">
                    </ul>
                </div>
            </section>
        </article>
    </div>`+ this.footPage + ` <a class="zajindan">
        <img src="../images/chuizi.png" alt="锤子">
        <span>恭喜你一夜暴富中了5角!!!</span>
    </a>`;
        $(this.el).html(template);
        this.getHot();
        this.getWill();
        this.getLast();
    }
    handle() {
        $("#indexPage").on("click", "[href='#detailmovie']", function () {
            movieId._id = this.dataset.id;
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        })
    }
    async getHot() {
        let data = await moviesService.getMovies();
        let template1 = data.count.map((v, i) => {
            if (i < 8) return ` <figure>
        <div style="display:inline-block;" class="cnm">
            <a href="#detailmovie" data-id="${v._id}"><img src="${v.poster}" alt="${v.cname}"></a>
            <a href="#" data-id="${v._id}"><figcaption>购票</figcaption></a>
        </div>
    </figure>`; else return;
        }).join("");
        $(".hotPlay").html(template1);
        let template2 = data.count.map((v, i) => {
            if (i == 1) return ` <li><a href="#detailmovie" data-id="${v._id}">
            <img src="${v.images[0]}" alt="top1">
            <div>
                <p>${v.cname}</p>
                <p>${v.count}万</p>
            </div>
        </a></li>`; else return;
        }).join("");
        let template3 = data.count.map((v, i) => {
            if (0 < i && i < 10) return ` <li><a data-id="${v._id}" href="#detailmovie">
            <p><span><i>${i + 1}</i>${v.cname}</span><span>${v.count}万</span></p>
        </a></li>`; else return;
        }).join("");
        $(".todayPiao").html(template2 + template3);
    }
    async getWill() {
        let data = await moviesService.getMovies();
        let template1 = data.wantSee.map((v, i) => {
            if (i < 8) return ` <div>
            <a data-id="${v._id}" href="#detailmovie">
                <img src="${v.poster}" alt="图片">
                <p>${v.wantSee}万人想看</p>
                <p><span>预告片</span> <span>预售</span> </p>
            </a>
            <p>${v.upDate}上映</p>
        </div>`; else return;
        }).join("");
        $(".willSeeM").html(template1);
        let template2 = data.wantSee.map((v, i) => {
            if (i == 0) return `<li><a data-id="${v._id}" href="#detailmovie">
            <img src="${v.images[0]}" alt="${v.cname}">
            <div>
                <p>${v.cname}</p>
                <p>上映时间：${v.years}</p>
                <p>${v.wantSee}万人想看</p>
            </div>
        </a></li>`; else return;
        }).join("");
        let template3 = data.wantSee.map((v, i) => {
            let str = "";
            if (i == 1) {
                str += ` <li><a data-id="${v._id}" href="#detailmovie">
                <img src="${v.images[0]}" alt="${v.cname}">
                <p>${v.cname}</p>
                <p>${v.wantSee}万人想看</p>
            </a>`
            } else if (i == 2) {
                str += `<a  data-id="${v._id}" href="#detailmovie">
                <img src="${v.images[0]}" alt="${v.cname}">
                <p>${v.cname}</p>
                <p>${v.wantSee}万人想看</p>
            </a></li>`
            }
            return str;
        }).join("");
        let template4 = data.wantSee.map((v, i) => {
            if (i > 2 && i < 10) {
                return ` <li><a data-id="${v._id}" href="#detailmovie">
                <p><span><i>${i + 1}</i>${v.cname}</span><span>${v.wantSee}万人想看</span></p>
            </a></li>`
            }
        }).join("");
        $(".wantSeeLi").html(template2 + template3 + template4);

    }
    async getLast() {
        let data = await moviesService.getMovies();
        let template1 = data.score.map((v, i) => {
            if (i < 7) return ` <a data-id="${v._id}" href="#detailmovie"><img src="${v.poster}" alt="wqe"></a>`
        }).join("");
        $(".lastMovie").html(template1);
        let template2 = data.score.map((v, i) => {
            if (i == 0) return `  <li><a data-id="${v._id}" href="#detailmovie">
            <img src="${v.images[0]}" alt="${v.cname}">
            <div>
                <p>${v.cname}</p>
                <p>${v.score}分</p>
            </div>
        </a></li>`
        }).join("");
        let template3 = data.score.map((v, i) => {
            if (i > 0 && i < 10) return `<li><a data-id="${v._id}" href="#detailmovie">
            <p><span><i>${i + 1}</i>${v.cname}</span><span>${v.score}分</span></p>
        </a></li>`
        }).join("");
        $(".lovelyBaby").html(template2 + template3);
    }
}