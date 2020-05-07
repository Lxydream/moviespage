import adminService from "../service/adminService.js"
import base from "./base.js"
    export default class extends base{
        render(){
            const template=`
            <main class="registStyle" style="width:330px;">
            <div class="easyui-panel" title="管理员登录" style="width:330px;height:250px;padding:10px;background:#fafafa;">
            <p>
                <input id="username" style="width:300px;" class="easyui-textbox" data-options="iconCls:'icon-man'" prompt="请输入账户">
            </p>
            <p>
                <input id="password" style="width:300px;" class="easyui-passwordbox" prompt="请输入密码" iconWidth="16">
            </p>
            <p>
                <input id="passwords" style="width:300px;" class="easyui-passwordbox" prompt="请再次输入密码" iconWidth="16">
            </p>
           <p  style="text-align:center";> <a id="register" href="#" class="easyui-linkbutton">注册完成</a></p>
        </div>
        </main> `;
            $(this.el).html(template);
            $.parser.parse(this.el)
        }
        handle(){
            $("#register").click(function () {
                const adminName = $("#username").val();
                const adminPassword = $("#password").val();
                const adminPasswords=$("#passwords").val()
                $.ajax({
                    url: "./api/admin/register",
                    type: "post",
                    data: {
                        adminName,
                        adminPassword
                    },
                    success(data) {
                        
                        if (data.isregister) {
                            if(adminPasswords==adminPassword){
                                alert("ok");
                                location.hash= "/login"
                            }else{
                                alert("密码不一致请重新输入")
                            }
                           
                        } else {
                            alert("no")
                        }
                    }
                })
            })
            
        }
        async regist(admin){
            const data = await adminService.regist(admin);
            return data.isRegist;
        }
    }