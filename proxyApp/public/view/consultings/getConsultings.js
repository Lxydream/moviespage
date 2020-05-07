import Base from "../base.js";
import consoultingsService from "../../service/consoultingsService.js";
// import pager from "../../util/pager.js"


export default class extends Base { //资讯管理视图
    render() { //渲染资讯管理页面
        const template = `
        <main>
        <a id="add-btn"  class="easyui-linkbutton" data-options="iconCls:'icon-add'">新增资讯</a>

        <div id="add-all" class="easyui-dialog" title="新增资讯" style="width:400px;height:420px;padding:50px;"
        data-options="iconCls:'icon-add',resizable:true,modal:true,closed:true">
        <form name="addForm" id="addForm">
            <p><label for="comment" style="margin-right:10px;">标题:</label>
                <input class="easyui-validatebox" style="border-radius: 6px; height:18px; margin-left:0px;" type="text"
                    name="title" data-options="required:true" />
            </p>
            <p>日期：
                <input class="easyui-datetimebox" name="time" style="width:173px;" data-options="required:true,showSeconds:false"
                    style="width:150px">
            </p>
            <p>
                <img style="width:50px;height:50px;">
                <input type="file">
            </p>
            <p>
                <label for="comment">文段:</label>
                <input class="easyui-validatebox" style="border-radius: 6px; height:18px; margin-left:10px;" type="text"
                    name="comment" data-options="required:true" />
            </p>
            <p>
                <label for="text">评论:</label>
                <input class="easyui-validatebox" style="border-radius: 6px; height:18px; margin-left:10px;" type="text"
                    name="text" data-options="required:true" />
            </p>
            <p>
                <input class="qran" type="button" style="margin-left:50px;" value="确认新增" />
            </p>
        </form>
    </div>
                <input id="searche_name" class="easyui-searchbox" style="width:170px"
                data-options="prompt:'搜索',menu:'#xiala'"></input>
                <div id="xiala" style="width:120px">
                    <div data-options="name:'title',iconCls:'icon-ok'">标题</div>
                    <div data-options="name:'time',iconCls:'icon-ok'">时间</div>
                </div>
                <div id="op1">
                <table id="dg"  style="width:100%"></table>
                </div>
                </main>
                <slection id="tc"></slection>
               `
        $(this.el).html(template);
        $.parser.parse(this.el);
        this.getConsultings();
        this.update()
        
    }
    handle() { //负责事件监听
        const that = this;
        $("#add-btn").click(async function(){
            $("#add-all").dialog({
                closed: false,
            })
        })
        $("body").delegate(".qran", "click", async function () {
            //上传文件的代码
            const file = $("input[type='file']")[0].files[0];
            const fd = new FormData();
            fd.append("img", file); //键的名字必须与服务器对应
            const filePath = await that.upload(fd);
            let success = await that.addConsulting(`${$(document.addForm).serialize()}+&picture=${filePath}`);

            if (success) {
                // alert("ok");
                that.getConsultings();
                $("#add-all").dialog({
                    closed: true
                })
            } else {
                alert("增添失败！！！")
            }
        });
        //删除
        $("#op1").on({
            async click() {
                let _id = $(this).attr("data-id"); //获取按钮上面存放的 _id
                // console.log();
                let isDelete = confirm("你确定要删除这一条数据吗？_id:" + _id);
                if (!isDelete) return;
                const success = await that.deleteConsulting(_id);
                console.log(success);

                if (success) {
                    alert("ok");
                    that.getConsultings();
                } else {
                    alert("no");
                }
            }
        }, ".delete_btn");

    }
    // 更新
    async update() {
        let that = this;
        $("#op1").on({
            async click() {
                const template = ` 
                <div id="add-tc" class="easyui-dialog" title="更新资讯" style="width:300px;height:320px;">
                <form name="updateZNJ" id="updateZNJ">
               <p>
               <label for="title">标题:</label>   
               <input class="easyui-validatebox" style="border-radius: 6px; height:18px; margin-left:10px;" type="text" name="title" data-options="required:true" /> 
               </p>
               <p>日期：
               <input  id="choose-date" type="text" class= "easyui-datebox easyui-validatebox" required ="required" currentText="Today"/> 
               </p>
               <img style="width:50px;height:50px;">
               <input type="file" >
               </p>
               <p>
               <label for="comment">文段:</label>   
               <input class="easyui-validatebox" style="border-radius: 6px; height:18px; margin-left:10px;" type="text" name="comment" data-options="required:true" />   
               </p>
               <p>
               <label for="text">评论:</label>   
               <input class="easyui-validatebox" style="border-radius: 6px; height:18px; margin-left:10px;" type="text" name="text" data-options="required:true" />   
               </p>
               <p>  
              <input class="qran" type="button" style="margin-left:50px;" value="确认更新"/>   
               </p>
               </form>
           </div>`
                $("#tc").html(template);
                // console.log(this.dataset.id);
                let obj = JSON.parse(this.dataset.id)
                // console.log("this is",this,this.dataset.id);
                localStorage._id = obj._id;
                $.parser.parse("#tc");
                $("#updateZNJ").form('load', obj);
                $(".qran").click(async function () {
                    let consulting;
                    let file = $("input[type='file']")[1].files[0];
                    console.log(file);
                    let fd = new FormData();
                    fd.append("img", file);
                    let filePath = await that.upload(fd);
                    // consulting = $(document.updateZNJ).serialize() + `&picture=${filePath}`;
                    // const fd = new FormData();
                    // fd.append("img", file);
                    // const filePath = await that.upload(fd);
                    // let consulting = $(document.updateZNJ).serialize()
                    // `&headImg=${filePath}`;
                    // let consulting = $(document.updateZNJ).serialize();

                    let data = await consoultingsService.updateConsulting(`${$(document.updateZNJ).serialize()}&picture=${filePath}`);
                    // console.log(data);

                    if (data.nModified > 0) {
                        alert("更新成功");
                        that.getConsultings();
                        $("#add-tc").dialog({
                            closed: true
                        })
                    } else {
                        alert("更新失败！！")
                    }
                })
            }
        }, ".update_btn");
    }

    async getConsultings() {
        const data = await consoultingsService.getConsultings();
        $('#dg').datagrid({
            title: "资讯管理",
            fitColumns: true, // 平均分配每一栏
            pagination: true, // 添加分页组件
            rownumbers: true, // 显示行号
            pageList: [5, 10, 15], //显示每页条目数
            data: data.slice(0, 10),
            columns: [
                [{
                        field: 'title',
                        title: '标题',
                        width: 100
                    },
                    {
                        field: 'time',
                        title: '时间',
                        width: 100
                    },
                    {
                        field: 'picture',
                        title: '图片',
                        width: 50,
                        formatter(value, row, index) {
                            return `
                            <img style="width:50px;height:20px;" src="${row.picture}">
                            `
                        }
                    },
                    {
                        field: 'comment',
                        title: '文段',
                        width: 100
                    },
                    {
                        field: 'text',
                        title: '评论',
                        width: 100
                    },
                    {
                        field: 'operation',
                        title: '操作',
                        width: 100,
                        formatter(value, row, index) {
                            let obj = JSON.stringify(row);
                            return `<input type="button" class="delete_btn" data-id="${row._id}" value="删除"></input>
                       
                                    <input type="button" class="update_btn" id="gx" data-id='${obj}' value="更新" class="refresh" onclick="edistu("${row._id})"></input>
                            `
                        }
                    }


                ]
            ]
        });
        // <input type="button" class="easyui-linkbutton upadte" data-id="${row.id}" value="更新"></input>
        const pager = $("#dg").datagrid("getPager"); // 返回分页控件
        pager.pagination({
            total: data.length, //数据总长度
            onSelectPage: function (pageNo, pageSize) {
                // console.log(pageNo, pageSize);
                //重新计算开始值以及结束值
                const start = (pageNo - 1) * pageSize;
                const end = start + pageSize;
                $("#dg").datagrid("loadData", data.slice(start, end));
                pager.pagination('refresh', {
                    total: data.length,
                    pageNumber: pageNo
                });
            }
        });
    }
    async deleteConsulting(_id) {
        const data = await consoultingsService.deleteConsulting(_id);
        return data.status;
    }
    async addConsulting(consoulting) {
        const data = await consoultingsService.addConsulting(consoulting);
        return data;
    }
    async updateConsulting(consoulting, _id) {
        const data = await consoultingsService.updateConsoulting(consoulting, _id);
        return data.status;
    }
    async upload(fd) {
        const data = await consoultingsService.upload(fd);
        return data.filePath;
    }

}