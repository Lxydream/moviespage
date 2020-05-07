import usersService from "../service/usersService.js"
import base from "./base.js"
export default class extends base {
    render() { //负责页面渲染的
        const template = `
        <main class="lxzuode">
        <div>
            <a id="creatuser" class="easyui-linkbutton" data-options="iconCls:'icon-man'">新增用户</a>
            <a id="deletauser" class="easyui-linkbutton" data-options="iconCls:'icon-man'">删除用户</a>
            <a class="easyui-linkbutton" data-options="iconCls:'icon-man'">修改信息</a>
            <input id="largebig"></input> 
            <div id="chuangkou" style="width:320px"> 
            <div data-options="name:'all',iconCls:'icon-ok'">用户名</div> 
            <div data-options="name:'sports',iconCls:'icon-ok'">手机号</div> 
            <div data-options="name:'sports',iconCls:'icon-ok'">邮箱</div> 
            </div>
        </div>
        <div class="bigdiv">
        <table  id="tablelx">
            <tbody class="tbtable">
            </tbody>
        </table>
        </div>
    </main>
    <selection class="tcClass"></selection>
  `;
        $(this.el).html(template);

        this.addr();
        this.adduser()
        this.dele();
        this.up()
        $.parser.parse($(".lxzuode"))
    }

    //监听事件
    async handle() {
        let that = this
        $('#largebig').searchbox({
            searcher: function (value, name) {
                alert(value + "," + name)
            },
            menu: '#chuangkou',
            prompt: '请输入值'
        });

        // console.log(that.reu);

    }
    //数据渲染
    async addr() {
        let that = this
        let data = await usersService.creatuser()
        that.reu = data;
        $("#tablelx").datagrid({
            title: "",
            fitColumns: true,
            pagination: true,
            rownumbers: true,
            pageList: [5, 10, 15],
            data: data.slice(0, 10),
            columns: [
                [
                    {
                        field: 'userName', align: "center", title: "用户名", width:
                            80
                    },
                    { field: 'userPassword', align: "center", title: "密码", width: 100 },
                    { field: 'phone', align: "center", title: "电话", width: 100 },
                    { field: 'mail', align: "center", title: "邮箱", width: 100 },
                    {
                        field: 'option', align: "center", title: "操作", width: 30,
                        formatter(value, row, index) {
                            let obj = JSON.stringify(row)
                            return `
                            <input type="button" class="delete_btn" data-id="${row._id}" value="删除" id="updeleteuser">
                                <input type="button" name="button" id="upuser" data-id='${obj}' value="修改" class="gxrefres" onclick="editStu(${row._id})">
                                `
                        }
                    },
                ]
            ]

        });
        const pager = $("#tablelx").datagrid("getPager");
        pager.pagination({
            total: data.length,
            onSelectPage: function (pageNo, pageSize) {
                // console.log(pageNo, pageSize);
                const start = (pageNo - 1) * pageSize;
                const end = start + pageSize;
                $("#tablelx").datagrid("loadData", data.slice(start, end));
                pager.pagination('gxrefres', {
                    total: data.length,
                    pageNumber: pageNo
                });
            }
        });
    }
    //修改
    async  up() {
        let that = this
        $(".bigdiv").on({
            async  click() {
                // let data = await usersService.creatuser()
                // that.reu = data;
                // console.log(that.reu);
                $(".tcClass").html(`
                    <div id="pop" class="easyui-dialog" title="修改用户" style="width:400px;height:300px;"   
                data-options="iconCls:'icon-save',resizable:true,modal:true">  
                <form action="" id="xiugai" name="xiugai">
                <p> 用户名:<input name="userName"" id="userName" class="easyui-textbox" data-options="iconCls:'icon-man'" style="width:200px"> </p> 
                <p> &nbsp&nbsp&nbsp密码:<input name="userPassword" id="userPassword" class="easyui-textbox" data-options="iconCls:'icon-lock'" style="width:200px" ></p>
                <p> 手机号:<input id="phone" name="phone" class="easyui-textbox" data-options="iconCls:'icon-filesave'" style="width:200px" ></p> 
                <p>&nbsp&nbsp 邮箱:<input id="mail" name="mail" class="easyui-textbox" data-options="iconCls:'icon-back'" style="width:200px" ></p> 
                <a id="btn" class="easyui-linkbutton" data-options="iconCls:'icon-undo'" style="margin-left:20px">修改</a> 
                </form>
                </div>
        `)

                let obj = JSON.parse(this.dataset.id);
                localStorage._id = obj._id;
                // localStorage.setItem()
                console.log(obj);
                delete obj._id;
                $('#xiugai').form('load', obj);
                $.parser.parse(".tcClass");
                $("#btn").click(async function () {
                    //    let userName =$("#userName").val();
                    //    let userPassword=$("# userPassword").val();
                    //    let phone= $("#phone").val();
                    //    let mail=$("#mail").val();
                    let a = $(document.xiugai).serialize();
                    // a+=`_id${localStorage._id}`;
                    console.log(a);
                    let data = await usersService.upuser(a);
                    if (data) {
                     
                        alert(`修改成功`)
                        that.addr()
                        $("#pop").dialog({
                            closed: true
                        })
                    }
                    // console.log(a);



                })

            }
        }, ".gxrefres")


    }
    //添加
    async adduser() {
        let that = this
        //添加
        $("#creatuser").click(function () {
            $(".tcClass").html(`
                    <div id="cpm" class="easyui-dialog" title="新增用户" style="width:400px;height:300px;"   
                data-options="iconCls:'icon-save',resizable:true,modal:true">  
                <p> 用户名:<input id="username" class="easyui-textbox" data-options="iconCls:'icon-man'" style="width:200px"> </p> 
                <p> &nbsp&nbsp&nbsp密码:<input id="password" class="easyui-textbox" data-options="iconCls:'icon-lock'" style="width:200px"></p>
                <p> 手机号:<input id="ipone" class="easyui-textbox" data-options="iconCls:'icon-filesave'" style="width:200px"></p> 
                <p>&nbsp&nbsp 邮箱:<input id="email" class="easyui-textbox" data-options="iconCls:'icon-back'" style="width:200px"></p> 
                <a id="abutton" class="easyui-linkbutton" data-options="iconCls:'icon-undo'" style="margin-left:20px">添加</a> 
        </div>  
         `)
            $.parser.parse($(".tcClass"))
            $(function () {
                $('#abutton').bind('click', function () {
                    const userName = $("#username").val()
                    const userPassword = $("#password").val()
                    const phone = $("#ipone").val()
                    const mail = $("#email").val()
                    $.ajax({
                        url: "./api/users/adduser",
                        type: "post",
                        data: {
                            userName,
                            userPassword,
                            phone,
                            mail
                        },
                        success(data) {
                            if (data) {
                                if (!(userName == "" && userPassword == "" && phone == "" && mail == "")) {
                                    that.addr()
                                    alert('添加成功');

                                }

                            } else {
                                alert('账号已存在');
                            }
                            $("#cpm").dialog({
                                closed: true
                            })
                        }
                    })


                });
            });

        })
    }
    //删除
    async dele() {

        let that = this
        $(".bigdiv").on({
            async click() {
                let users = $(this).attr("data-id");
                let data = await usersService.deleteuser(users)
                const delete_btn = confirm(`你确定要删除吗？`)
                if (delete_btn) {
                    that.addr()
                }
            }
        }, ".delete_btn")





    }

}
