import Base from "./base.js";
import usersService from "../service/usersService.js"
export default class extends Base {
    render() {
        const template = `
        <div id="regMaoyan">
        <div class="logo_head">
            <a href="./index.html">
                <img src="../images/logo_s.png" alt="logo">
            </a>
        </div>
        <div class="register_table">
            <form name="regForm">
                <p>
                    <label for="userName">用户名</label> 
                    <input type="text" name="userName" id="userName"></p>
                <p>
                <p>
                    <label for="phone">手机号</label>
                    <input  type="text" name="phone" maxlength="11" id="phone">
                    <span>注册成功后，全美团可用</span></p>
                <p>
                    <label for="userPassword">创建密码</label> 
                    <input type="password" name="userPassword" id="userPassword"></p>
                <p class="level"><span>弱</span><span>中</span><span>强</span></p>
                <p>
                    <label for="mail">邮箱</label> 
                    <input type="email" name="mail" id="mail"></p>
                <a class="tologin">确认以下协议并注册</a>
                <p><a class="xieyi">《美团用户协议》</a></p>
            </form>
        </div>
        <div class="ft_bottom">
            <p>&copy;meituan.com 京ICP证070791号 京公网备11010502025545号</p>
        </div>
    </div>
        `
        $(this.el).html(template);
    }
    handle() {
        $(".tologin").on("click", async function () {
            let tdata = $(document.regForm).serializeArray();
            if (tdata.some(v => v.value == "")) {
                alert("请认真填写！还有空白！");
                return false;
            } else {
                let data = await usersService.creatuser();
                if (data.some(v => v.userName == tdata[0].value)) {
                    alert("该用户名已存在!");
                    $(document.regForm.userName).val("");
                } else if (data.some(v => v.phone == tdata[1].value)) {
                    alert("该手机号已注册!");
                    $(document.regForm.phone).val("");
                } else {
                    await usersService.adduser(tdata);
                    alert("注册成功，跳转登陆");
                    location.hash = "/login";
                }
            }
        })
        $($("#userPassword")).on("input", function () {
            let pwd = $(document.regForm.userPassword).val();
            if (pwd.length > 0 && pwd.length <= 6) {
                $(".level").children().css({
                    backgroundColor: "#eeeeee",
                    color: "#ffffff"
                })
                $(".level").children().eq(0).css({
                    backgroundColor: "#e02025",
                    color: "#ebebeb"
                })
            } else if (pwd.length > 6 && pwd.length <= 10) {
                $(".level").children().css({
                    backgroundColor: "#eeeeee",
                    color: "#ffffff"
                })
                $(".level").children().eq(1).css({
                    backgroundColor: "#0f119e",
                    color: "#ebebeb"
                })
            } else if (pwd.length > 10) {
                $(".level").children().css({
                    backgroundColor: "#eeeeee",
                    color: "#ffffff"
                })
                $(".level").children().eq(2).css({
                    backgroundColor: "#20e02a",
                    color: "#ebebeb"
                })
            }
        })
    }
}