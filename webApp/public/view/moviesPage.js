import Base from "./base.js"
import moviesService from "../service/moviesService.js"
import movieId from "./movieId.js"
export default class extends Base {
    render() {
        const template = this.headPage + `
        <div id="movieMain">
        <!-- 电影分类 -->
        <div class="toplist_classify">
            <a href="#nowhot">正在热映</a>
            <a href="#orderup">即将上映</a>
            <a href="#goodmovie">经典影片</a>
        </div>
        <!-- 正片 -->
        <div class="all_movie">
            <!-- 正片上 -->
            <!-- 电影详细分类 -->
            <div class="lei">
                <ul class="lei_1">
                    <li>
                        <div>
                            类型：
                        </div>
                        <ul class="lei_2">
                            <li>
                                <input type="radio" id="quanbu" name="leixing" checked>
                                <label for="quanbu">
                                    <a>全部</a>
                                </label>
                                <input type="radio" id="aiqing" name="leixing">
                                <label for="aiqing">
                                    <a>爱情</a>
                                </label>
                                <input type="radio" id="xiju" name="leixing">
                                <label for="xiju">
                                    <a>喜剧</a>
                                </label>
                                <input type="radio" id="donghua" name="leixing">
                                <label for="donghua">
                                    <a>动画</a>
                                </label>
                                <input type="radio" id="juqing" name="leixing">
                                <label for="juqing">
                                    <a>剧情</a>
                                </label>
                                <input type="radio" id="kongbu" name="leixing">
                                <label for="kongbu">
                                    <a>恐怖</a>
                                </label>
                                <input type="radio" id="jings" name="leixing">
                                <label for="jings">
                                    <a>惊悚</a>
                                </label>
                                <input type="radio" id="kehuan" name="leixing">
                                <label for="kehuan">
                                    <a>科幻</a>
                                </label>
                                <input type="radio" id="dongzuo" name="leixing">
                                <label for="dongzuo">
                                    <a>动作</a>
                                </label>
                                <input type="radio" id="xuanyi" name="leixing">
                                <label for="xuanyi">
                                    <a>悬疑</a>
                                </label>
                                <input type="radio" id="fanzui" name="leixing">
                                <label for="fanzui">
                                    <a>犯罪</a>
                                </label>
                                <input type="radio" id="maoxian" name="leixing">
                                <label for="maoxian">
                                    <a>冒险</a>
                                </label>
                                <input type="radio" id="zhanzheng" name="leixing">
                                <label for="zhanzheng">
                                    <a>战争</a>
                                </label>
                                <input type="radio" id="qihuan" name="leixing">
                                <label for="qihuan">
                                    <a>奇幻</a>
                                </label>
                                <input type="radio" id="yundong" name="leixing">
                                <label for="yundong">
                                    <a>运动</a>
                                </label>
                                <input type="radio" id="jiating" name="leixing">
                                <label for="jiating">
                                    <a>家庭</a>
                                </label>
                                <input type="radio" id="guzhuang" name="leixing">
                                <label for="guzhuang">
                                    <a>古装</a>
                                </label>
                                <input type="radio" id="wuxia" name="leixing">
                                <label for="wuxia">
                                    <a>武侠</a>
                                </label>
                                <input type="radio" id="xibu" name="leixing">
                                <label for="xibu">
                                    <a>西部</a>
                                </label>
                                <input type="radio" id="lishi" name="leixing">
                                <label for="lishi">
                                    <a>历史</a>
                                </label>
                                <input type="radio" id="zhuanji" name="leixing">
                                <label for="zhuanji">
                                    <a>传记</a>
                                </label>
                                <input type="radio" id="gewu" name="leixing">
                                <label for="gewu">
                                    <a>歌舞</a>
                                </label>
                                <input type="radio" id="heisedianying" name="leixing">
                                <label for="heisedianying">
                                    <a>黑色电影</a>
                                </label>
                                <input type="radio" id="duanpian" name="leixing">
                                <label for="duanpian">
                                    <a>短片</a>
                                </label>
                                <input type="radio" id="jilupian" name="leixing">
                                <label for="jilupian">
                                    <a>纪录片</a>
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
                            区域：
                        </div>
                        <ul class="lei_2">
                            <li>
                                <input type="radio" id="quanbu2" name="quyu" checked>
                                <label for="quanbu2">
                                    <a>全部</a>
                                </label>
                                <input type="radio" id="dalu" name="quyu">
                                <label for="dalu">
                                    <a>中国大陆</a>
                                </label>
                                <input type="radio" id="meiguo" name="quyu">
                                <label for="meiguo">
                                    <a>美国</a>
                                </label>
                                <input type="radio" id="hanguo" name="quyu">
                                <label for="hanguo">
                                    <a>韩国</a>
                                </label>
                                <input type="radio" id="riben" name="quyu">
                                <label for="riben">
                                    <a>日本</a>
                                </label>
                                <input type="radio" id="zhongguoxianggang" name="quyu">
                                <label for="zhongguoxianggang">
                                    <a>中国香港</a>
                                </label>
                                <input type="radio" id="zhongguotaiwan" name="quyu">
                                <label for="zhongguotaiwan">
                                    <a>中国台湾</a>
                                </label>
                                <input type="radio" id="taiguo" name="quyu">
                                <label for="taiguo">
                                    <a>泰国</a>
                                </label>
                                <input type="radio" id="yindu" name="quyu">
                                <label for="yindu">
                                    <a>印度</a>
                                </label>
                                <input type="radio" id="faguo" name="quyu">
                                <label for="faguo">
                                    <a>法国</a>
                                </label>
                                <input type="radio" id="yingguo" name="quyu">
                                <label for="yingguo">
                                    <a>英国</a>
                                </label>
                                <input type="radio" id="eluosi" name="quyu">
                                <label for="eluosi">
                                    <a>俄罗斯</a>
                                </label>
                                <input type="radio" id="yidali" name="quyu">
                                <label for="yidali">
                                    <a>意大利</a>
                                </label>
                                <input type="radio" id="xibanya" name="quyu">
                                <label for="xibanya">
                                    <a>西班牙</a>
                                </label>
                                <input type="radio" id="deguo" name="quyu">
                                <label for="deguo">
                                    <a>德国</a>
                                </label>
                                <input type="radio" id="bolan" name="quyu">
                                <label for="bolan">
                                    <a>波兰</a>
                                </label>
                                <input type="radio" id="aodaliya" name="quyu">
                                <label for="aodaliya">
                                    <a>澳大利亚</a>
                                </label>
                                <input type="radio" id="yilang" name="quyu">
                                <label for="yilang">
                                    <a>伊朗</a>
                                </label>
                                <input type="radio" id="qita2" name="quyu">
                                <label for="qita2">
                                    <a>其他</a>
                                </label>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <div>
                            年代：
                        </div>
                        <ul class="lei_2">
                            <li>
                                <input type="radio" id="quanbu3" name="niandai" checked>
                                <label for="quanbu3">
                                    <a>全部</a>
                                </label>
                                <input type="radio" id="yihou" name="niandai">
                                <label for="yihou">
                                    <a>2018以后</a>
                                </label>
                                <input type="radio" id="2018" name="niandai">
                                <label for="2018">
                                    <a>2018</a>
                                </label>
                                <input type="radio" id="2017" name="niandai">
                                <label for="2017">
                                    <a>2017</a>
                                </label>
                                <input type="radio" id="2016" name="niandai">
                                <label for="2016">
                                    <a>2016</a>
                                </label>
                                <input type="radio" id="2015" name="niandai">
                                <label for="2015">
                                    <a>2015</a>
                                </label>
                                <input type="radio" id="2014" name="niandai">
                                <label for="2014">
                                    <a>2014</a>
                                </label>
                                <input type="radio" id="2013" name="niandai">
                                <label for="2013">
                                    <a>2013</a>
                                </label>
                                <input type="radio" id="2012" name="niandai">
                                <label for="2012">
                                    <a>2012</a>
                                </label>
                                <input type="radio" id="2011" name="niandai">
                                <label for="2011">
                                    <a>2011</a>
                                </label>
                                <input type="radio" id="2000-2010" name="niandai">
                                <label for="2000-2010">
                                    <a>2000-2010</a>
                                </label>
                                <input type="radio" id="90" name="niandai">
                                <label for="90">
                                    <a>90年代</a>
                                </label>
                                <input type="radio" id="80" name="niandai">
                                <label for="80">
                                    <a>80年代</a>
                                </label>
                                <input type="radio" id="70" name="niandai">
                                <label for="70">
                                    <a>70年代</a>
                                </label>
                                <input type="radio" id="gengzao" name="niandai">
                                <label for="gengzao">
                                    <a>更早</a>
                                </label>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
            <!-- 正片下 -->
            <div class="movie_odk">
                <!-- 选择框 -->
                <div class="movie_odk_choose">
                    <p>
                        <input type="radio" name="retarget" id="hot_top" value="hot_top" checked>
                        <label class="retarget_son" for="hot_top"><span>按热门排序</span></label>
                        <input type="radio" name="retarget" id="time_top" value="time_top">
                        <label class="retarget_son" for="time_top"><span>按时间排序</span></label>
                        <input type="radio" name="retarget" id="word_top" value="word_top">
                        <label class="retarget_son" for="word_top"><span>按评论排序</span></label>
                    </p>
                    <p>
                        <input type="checkbox" name="retarget" id="can_active" value="can_active">
                        <label class="retarget_son" for="can_active"><span>可播放</span></label>
                    </p>
                </div>
                <!-- 影片图片 -->
                <div class="movie_odk_look">
                </div>
                <!-- 翻页 -->
                <div class="movie_odk_page">
                </div>
            </div>
        </div>
        </div>
        `+ this.footPage
        $(this.el).html(template);
        this.getMoviesPage();
        this.getPageSize();

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
            let data = await moviesService.getMovies();
            pageSize = $(this).text() - 0;
            let template = data.count.map((v, i) => {
                if (30 * (pageSize - 1) <= i && i < 30 * pageSize) return `<a data-id="${v._id}" href="#detailmovie">
            <img src="${v.poster}" alt="影片">
            <p>${v.cname}</p>
            <p> <span>${parseInt(v.score)}.</span> ${parseInt(v.score - parseInt(v.score)) * 10}</p>
        </a>`}).join("");
            $(".movie_odk_look").html(template);
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        });
        //上一页
        $(".movie_odk_page").on("click", ".upPage", async function () {
            if (pageSize > 1) {
                let data = await moviesService.getMovies();
                pageSize -= 1;
                let template = data.count.map((v, i) => {
                    if (30 * (pageSize - 1) <= i && i < 30 * pageSize) return `<a data-id="${v._id}" href="#detailmovie">
                <img src="${v.poster}" alt="影片">
                <p>${v.cname}</p>
                <p> <span>${parseInt(v.score)}.</span> ${parseInt(v.score - parseInt(v.score)) * 10}</p>
            </a>`}).join("");
                $(".movie_odk_look").html(template);
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
            let data = await moviesService.getMovies();
            if (pageSize < parseInt(data.count.length / 30) + 1) {
                pageSize += 1;
                let template = data.count.map((v, i) => {
                    if (30 * (pageSize - 1) <= i && i < 30 * pageSize) return `<a data-id="${v._id}" href="#detailmovie">
                <img src="${v.poster}" alt="影片">
                <p>${v.cname}</p>
                <p> <span>${parseInt(v.score)}.</span> ${parseInt(v.score - parseInt(v.score)) * 10}</p>
            </a>`}).join("");
                $(".movie_odk_look").html(template);
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

        $("#movieMain").on("click","[href='#detailmovie']",function(){
            movieId._id = this.dataset.id;
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        })
    }
    async getMoviesPage() {
        let data = await moviesService.getMovies();
        let template = data.count.map((v, i) => {
            if (i < 30) return `<a data-id="${v._id}" href="#detailmovie">
        <img src="${v.poster}" alt="影片">
        <p>${v.cname}</p>
        <p> <span>${parseInt(v.score)}.</span> ${parseInt(v.score - parseInt(v.score)) * 10}</p>
    </a>`}).join("");
        $(".movie_odk_look").html(template);
    }
    async getPageSize() {
        let data = await moviesService.getMovies();
        let stringSize = "", template;
        if (data.count.length / 30 > 5) {
            for (let i = 1; i <= 5; i++) {
                let string = `<a data-size="${i}" class="pageSize">${i}</a>`;
                stringSize += string;
            }
            template = ` <a class="upPage">上一页</a>` + stringSize + `<span>...</span>
            <a>${parseInt(data.count.length / 30) + 1}</a>
            <a class="downPage">下一页</a>`;
        } else {
            for (let i = 1; i <= data.count.length / 30 + 1; i++) {
                let string = `<a data-size="${i}" class="pageSize">${i}</a>`;
                stringSize += string;
            }
            template = ` <a class="upPage">上一页</a>` + stringSize + `<a class="downPage">下一页</a>`;
        }
        $(".movie_odk_page").html(template);
    }
}