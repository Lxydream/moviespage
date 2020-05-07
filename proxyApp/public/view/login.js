//渲染 事件监听 。。。
import adminService from "../service/adminService.js"
import base from "./base.js"
export default class extends base { //登陆页面的视图
    render() { //负责页面渲染的
        const template = `
        <main class="loginStyle" style="width:330px;">
    <div class="easyui-panel" title="管理员登录" style="width:330px;height:200px;padding:10px;background:#fafafa;">
    <p>
        <input id="username" style="width:300px;" class="easyui-textbox" data-options="iconCls:'icon-man'" prompt="请输入账户">
    </p>
    <p>
        <input id="password" style="width:300px;" class="easyui-passwordbox" prompt="请输入密码" iconWidth="16">
    </p>
    <p style="text-align:center;"><a id="btn" href="#" class="easyui-linkbutton">登录</a>
    <a id="register" href="#" class="easyui-linkbutton">注册</a></p>
</div> 
</main>
`;
        $(this.el).html(template);
        $.parser.parse(this.el)
    }
   
        
    
    
    handle() { //负责事件监听
        $("#btn").click(function () {
            const adminName = $("#username").val();
            const adminPassword = $("#password").val();
            $.ajax({
                url: "./api/admin/login",
                type: "post",
                data: {
                    adminName,
                    adminPassword
                },
                success(data) {
                   
                    if (data.isLogin) {
                        if(!(adminName==""&&adminPassword=="")){
                            alert("ok");
                            location.hash = "/mainPage"
                        }else{
                            alert("请输入账号密码")
                        }
                       
                    } else {
                        alert("no")
                    }
                }
            })
        })
        $("#register").click(function(){
            location.hash = "/register"
        })
        

    }
    async login(admin){
        const {success} = await adminService.login(admin);
        
        return success;
    }
}