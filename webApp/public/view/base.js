export default class { //登陆页面的视图
    constructor({
        el
    }) { //element
        this.el = el;
        this.headPage = `<header>
        <div class="head_left">
            <a href="#index"><img src="../images/logo_s.png" alt="logo"></a>
            <!-- 菜单栏成都下拉列表 -->
            <ol>
                <li>
                    <span>成都</span>
                    <ul>
                        <li>重庆</li>
                        <li>上海</li>
                        <li>北京</li>
                    </ul>
                </li>
            </ol>
            <nav>
                <ul>
                    <li><a href="#index">首页</a></li>
                    <li><a href="#moviesPage">电影</a></li>
                    <li><a href="#topList">榜单</a></li>
                    <li><a href="#cinema">影院</a></li>
                </ul>
            </nav>
        </div>
        <div class="head_right">
            <div>
                <input type="text" name="search">
            </div>
            <div>
                <img src="../images/avatar.png" alt="头像">
                <span class="denglua">
                    <a href="#login">登录</a>
                </span>
            </div> 
        </div>
    </header>`
        this.footPage = ` <footer>
    <p>&copy; 猫眼电影mayao.com 京IPC证070791号 京公网备11010502025545号 网络文化经营许可证 电子公告服务规则</p>
    <p>北京猫眼文化传媒有限公司</p>
    <a href="#index" class="fixed_cat"><img src="../images/cat.png" alt="猫"></a>
</footer>`;
        this.init();
    }
    init() {
        this.render();
        this.mounted();
        this.handle();
    }
    render() { //负责页面渲染的

    }
    mounted() { //负责挂载一些其他操作

    }
    handle() { //负责事件监听

    }
}