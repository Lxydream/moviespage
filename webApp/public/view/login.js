import Base from "./base.js";
import usersService from "../service/usersService.js"
export default class extends Base {
    render() {
        const template = `
        <div id="loginMaoyan">
        <div class="loading_page">
            <a href="./index.html"><img src="../images/logo.png" alt="logo"></a>
            <!-- 所有图片 -->
            <div class="loading_page_bottom">
                <img src="../images/login.png" alt="图片">
                <div>
                <form name="loginForm">
                    <p><span>账号登录</span><a href="#a1"><span>手机动态账号登录</span></a></p>
                    <p><img src="../images/login_icon01.png" alt="user_logo"><input type="text" name="userName" placeholder="用户名"></p>
                    <p><img src="../images/login_icon02.png" alt="psd_logo"><input type="password" name="userPassword" placeholder="密码"></p>
                    <p> <span><input type="checkbox" name="loading_time" value="load_time" id="load_time">
                            <label for="load_time">7天内自动登录</label></span>
                        <a href="#a2">忘记密码</a></p>
                    <a class="toindex">登录</a>
                    <p> <span>还没有账号？</span>
                        <a href="#regist">免费注册</a></p>
                </form>
                </div>
            </div>
    
            <footer>
                <p>&copy; 美团网团购 meituam.com 京ICP证070791号 京公网备11010502025545号 电子公告服务规则</p>
            </footer>
        </div>
    </div>
        `
        $(this.el).html(template);
    }
    handle(){
        $(".toindex").on("click",async function(){
           let loginData = $(document.loginForm).serializeArray();
           let data = await usersService.creatuser();
           if (data.some(v=>v.userName==loginData[0].value&&v.userPassword==loginData[1].value)) {
               alert("登陆成功！跳转首页！");
               location.hash = "/index";
           }else{
            alert("用户名或密码错误");
           }
        })
    }
}