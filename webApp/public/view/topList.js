import Base from "./base.js";
import moviesService from "../service/moviesService.js"
import movieId from "./movieId.js"
export default class extends Base {
    render() {
        const template = this.headPage + `
        <div id="topListMain">
  <!-- 榜单分类 -->
  <div class="toplist_classify">
    <a href="#qwda1">热映口碑榜</a>
    <a href="#qwda1">最受期待榜</a>
    <a href="#qwda1">国内票房榜</a>
    <a href="#qwda1">北美票房榜</a>
    <a href="#qwda1">TOP100榜</a>
</div>
<!-- 榜单 -->
<div class="toplist_all">
    <p>2016年-10-24 <span>已更新</span></p>
    <p>榜单规则：昨日大打发发发无法完全发群上v约个服务器和阿达而缺乏分权我父亲</p>
    <ol class="toplist_ol">
       
    </ol>
</div>
</div>
        `+ this.footPage;
        $(this.el).html(template);
        this.getTop();
    }
    handle() {
        $(".toplist_ol").on("click","[href='#detailmovie']",function(){
            movieId._id = this.dataset.id;
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        })
    }
    async getTop() {
        let data = await moviesService.getMovies();
        let template = data.count.map((v, i) => {
            if (i < 1) return ` <li>
            <a href="#detailmovie" data-id="${v._id}">
                <p><img src="${v.poster}" alt="${v.cname}"></p>
                <div>
                    <div>
                        <p>${v.cname}</p>
                        <p>主演：${v.actor}</p>
                        <p>上映时间：${v.upDate}</p>
                    </div>
                     <p><span>票房:</span><span>${v.count}</span></p>
                </div>
            </a>
        </li>`}).join("");
        template += data.count.map((v, i) => {
            if (i > 0 && i < 10) return ` <li>
            <a href="#detailmovie" data-id="${v._id}">
                <p><span>${i + 1}</span><img src="${v.poster}" alt="${v.cname}"></p>
                <div>
                    <div>
                        <p>${v.cname}</p>
                        <p>主演：${v.actor}</p>
                        <p>上映时间：${v.upDate}</p>
                    </div>
                     <p><span>票房:</span><span>${v.count}</span></p>
                </div>
            </a>
        </li>`
        }).join("");
        $(".toplist_ol").html(template);
    }
}