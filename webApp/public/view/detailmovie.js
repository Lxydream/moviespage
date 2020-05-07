import Base from "./base.js";
import moviesService from "../service/moviesService.js";
import movieId from "./movieId.js";
export default class extends Base {
    render() {
        const template =this.headPage+ `
    <div id="detailAll">
    <!-- 整体上 -->
    <div class="qugao">
       <div class="all">
           <div class="all_head_top">
           </div>
           <!-- 评分 -->
           <div>
               <div class="all_head_pinfen">
                   
               </div>
               <a href="#goupiao">立即购票</a>
           </div>
       </div>
   </div>
   
   <!-- 浮动图片 -->
   <div class="on_top">
       <div class="on_top_img">
           
       </div>
   </div>
   
   <!-- 详情 -->
   <div class="xiangqing_all">
       <article class="xiangqing_all_left">
           <!-- 详情标 -->
           <p>
               <a href="#jiehsao">介绍</a>
               <a href="#people">演职人员</a>
               <a href="#jiang">奖项</a>
               <a href="#photolist">图集</a>
           </p>
           <!-- 剧情介绍 -->
           <section class="xiangqing_introduce" id="jieshao">
               <span>剧情介绍</span>
               <p class="juqingjieshao">
               </p>
           </section>
           <!-- 演职人员 -->
           <section class="xiangqing_actor" id="people">
               <p><span>演职人员</span><a href="#adsw1">全部&gt;</a></p>
               <p><span>导演</span><span>演员</span></p>
               <div class="biaoyuanren">
               </div>
           </section>
           <!-- 图集 -->
           <section class="xiangqing_photolist" id="photolist">
               <p><span>图集</span><a href="#adsw1">全部&gt;</a></p>
               <div>
                   <img src="../images/dianyingxiangqing_09_03.png" alt="图集">
                   <div>
                       <img src="../images/tuji_img02.jpg" alt="图集">
                       <img src="../images/tuji_img03.jpg" alt="图集">
                       <img src="../images/tuji_img04.jpg" alt="图集">
                       <img src="../images/tuji_img05.jpg" alt="图集">
                   </div>
               </div>
           </section>
   
           <!-- 热门短评 -->
           <section class="xiangqing_descant">
               <p><span>热门短评</span><a href="#adsw1">写短评</a></p>
   
               <div class="xiangqing_descant_person">
                   <a href="#personal"><img src="../images/081a6441c82798d4080f9d38184f9a6f2704.jpg" alt="头像"></a>
                   <div>
                       <div>
                           <p>
                               <span>祖安_文科状元</span>
                               <span>09-30</span>
                           </p>
                           <a href="#dianzan"><span>12083</span></a>
                       </div>
                       <p>界面布局：流式布局 Fluid：流布局与固定宽度布局基本不同点
                           就在于对网站尺寸的侧量单位不同。固定宽度布局使用的是像素，但是流布局使用的是百分比，这位网页提供了很强的可塑性和流动性。换句话说，通过设置百分比，我们不需要考虑设备尺寸或者屏幕宽度大小了，可以为每种情形找到一种可行的方案，应为你的设计尺寸将适应所有的设备尺寸。流布局与媒体查询和优化样式技术密切相关。
                           界面交互方式：当前页打开，点击操作链接后，在当前的浏览器页面中进行内容显示与操作。</p>
                   </div>
               </div>
   
           </section>
       </article>
   
       <aside class="xiangqing_all_right">
           <!-- 相关资讯 -->
           <div class="xiangqing_information">
               <span>相关资讯</span>
               <div>
                   <a href="#information">
                       <img src="../images/xqzx_03.png" alt="资讯">
                       <div>
                           <p>《湄公河行动》上映20天票房突破十亿大关</p>
                           <p><span>猫眼电影</span><span>21145</span><span>111</span></p>
                       </div>
                   </a>
                   <a href="#information">
                       <img src="../images/biao.jpg" alt="资讯">
                       <div>
                           <p>《湄公河行动》不仅彭于晏没死，哮天犬也没死</p>
                           <p><span>橘子娱乐</span><span>1212</span><span>5</span></p>
                       </div>
                   </a>
                   <a href="#information">
                       <img src="../images/oneweek.jpg" alt="资讯">
                       <div>
                           <p>《湄公河行动》2.7亿连冠，周大盘大跌52%</p>
                           <p><span>猫眼电影</span><span>442332</span><span>70</span></p>
                       </div>
                   </a>
               </div>
           </div>
           <!-- 相关电影 -->
           <div class="xiangqing_movie">
               <span>相关电影</span>
               <div class="moviesAbout">
                  
               </div>
           </div>
   
       </aside>
   
   </div>
   
       </div>
      
        `+ this.footPage;
        $(this.el).html(template);
        this.getMovie();
    }

    handle() {
        $("#moviesAbout").on("click", "[href='#detailmovie']", function () {
            movieId._id = this.dataset.id;
            location.reload(true);
        })
    }

    async getMovie() {
        const _id = movieId._id;
        let data = await moviesService.searchMovie({ _id });
        let template1 = `
        <h1>${data[0].cname}</h1>
        <h2>${data[0].ename}</h2>
        <p>${data[0].type}</p>
        <p>${data[0].area}/ ${data[0].time}分钟</p>
        <p><a href="#ada23">想看</a><a href="#dad31">评分</a></p>
        `
        $(".all_head_top").html(template1);
        let template2 = `<div>
        <p>${parseInt(data[0].score)}.${parseInt(data[0].score - parseInt(data[0].score)) * 10}</p><span>(55.6万人评分)</span>
    </div>
    <div>
        <p>6.4</p><span>(45人评分)</span>
    </div>
    <div>
        <p>${data[0].count}万</p><span>(假的)</span>
    </div>`
        $(".all_head_pinfen").html(template2);
        $(".on_top_img").html(`<img src="${data[0].poster}" alt="详情">`);
        $(".juqingjieshao").html(`${data[0].intro}`);
        let strtee =`<a href="#renwu">
        <img src="${data[0].poster}" alt="人物">
        <p>${data[0].director}</p>
    </a>
    <a href="#renwu">
        <img src="${data[0].poster}" alt="人物">
        <p>${data[0].actor[0]}</p>
        <p>饰:高刚</p>
    </a>
    <a href="#renwu">
    <img src="${data[0].poster}" alt="人物">
    <p>${data[0].actor[0]}</p>
    <p>饰:高刚</p>
</a>
<a href="#renwu">
        <img src="${data[0].poster}" alt="人物">
        <p>${data[0].actor[0]}</p>
        <p>饰:高刚</p>
    </a>
   `
        $(".biaoyuanren").html(strtee);
        let data2 = await moviesService.getMovies();
        let template12 = data2.count.map((v, i) => {
            if (i < 6) return `<a href="#detailmovie" data-id=${v._id}>
    <img src="${v.poster}" alt="${v.cname}">
    <p>${v.cname}</p>
    <p><span>${parseInt(v.score)}.</span><span>${parseInt(v.score - parseInt(v.score)) * 10}</span></p>
</a>`}).join("");
        $(".moviesAbout").html(template12);
    }
}