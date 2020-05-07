import cinemasService from "../service/cinemasService.js"
export default class {
    constructor({ el }) {
        this.el = el;
        this.init();

    }
    init() {
        this.render();
        this.handle();
    }
    render() {
        const template = `
        <main class="cinemasPage">
        <div>
            <a id="creatcinemas" class="easyui-linkbutton" data-options="iconCls:'icon-man'">新增用户</a>
            <input id="cinemasInp"></input> 
            <div id="chuangkou" style="width:600px"> 
            <div data-options="name:'all',iconCls:'icon-ok'">影院名字</div> 
            <div data-options="adress:'adress'">影院地址</div> 
            <div data-options="website:'website'">影院网址</div> 
            </div>
        </div>
        <div class="cinemasDivAll">
        <table id="cinemasTable">
            <tbody class="cinemasTbodyF">
            </tbody>
        </table>
        </div>
    </main>
    <selection class="cinemasClass"></selection>
    `;
        $(this.el).html(template);
        $.parser.parse($(".cinemasPage"))
        this.getDate();
        this.delcinemas();
        this.addcinemas()
        this.modifycinemas();
    }

    async handle() {
        let that = this
        $('#cinemasInp').searchbox({
            searcher: function (value, name) {
                alert(value + "," + name)
            },
            menu: '#chuangkou',
            prompt: '请输入值'
        });
    }
    async getDate() {
        let that = this
        let data = await cinemasService.getPiece()
        that.reu = data;
        $("#cinemasTable").datagrid({
            title: "",
            fitColumns: true,
            pagination: true,
            rownumbers: true,
            pageList: [5, 10, 15],
            data: data.slice(0, 10),
            columns: [
                [
                    { field: 'name', align: "center", title: "影院名字", width: 80 },
                    { field: 'address', align: "center", title: "影院地址", width: 100 },
                    { field: 'website', align: "center", title: "影院网址", width: 100 },
                    { field: 'phone', align: "center", title: "影院电话", width: 100 },
                    { field: 'status', align: "center", title: "影院状态", width: 100 },
                    {
                        field: 'option', align: "center", title: "操作", width: 30,
                        formatter(value, row, index) {
                            let obj = JSON.stringify(row)
                            return `
                            <input type="button" class="cinemas_delbtn" data-id="${row._id}" value="删除" id="updeletecinemas">
                                <input type="button" name="button" id="upcinemas" data-id='${obj}' value="修改" class="xuigaicinemas">
                                `
                        }
                    },
                ]
            ]

        });
        const pager = $("#cinemasTable").datagrid("getPager");
        pager.pagination({
            total: data.length,
            onSelectPage: function (pageNo, pageSize) {
                // console.log(pageNo, pageSize);
                const start = (pageNo - 1) * pageSize;
                const end = start + pageSize;
                $("#cinemasTable").datagrid("loadData", data.slice(start, end));
                pager.pagination('gxcinemas', {
                    total: data.length,
                    pageNumber: pageNo
                });
            }
        });
    }

    async delcinemas() {
        let that = this
        $(".cinemasDivAll").on({
            async click() {
                let cinemas = $(this).attr("data-id");
                const delete_btn = confirm(`你确定要删除吗？`)
                if (delete_btn) {
                    let data = await cinemasService.remPiece({ _id: cinemas });
                    console.log(data);
                    that.getDate()
                }
            }
        }, ".cinemas_delbtn")
    }

    async addcinemas() {
        let that = this
        //添加
        $("#creatcinemas").click(function () {
            $(".cinemasClass").html(`
                <div id="cinemascpm" class="easyui-dialog" title="新增影院" style="width:400px;height:330px;" data-options="iconCls:'icon-save',resizable:true,modal:true">  
                <p>&emsp; 影院名字:<input id="cinemasname" class="easyui-textbox" data-options="iconCls:'icon-man'" style="width:200px"> </p> 
                <p>&emsp; 影院地址:<input id="cinemasaddress" class="easyui-textbox" data-options="iconCls:'icon-lock'" style="width:200px"></p>
                <p>&emsp; 影院网站:<input id="cinemasweb" class="easyui-textbox" data-options="iconCls:'icon-filesave'" style="width:200px"></p> 
                <p>&emsp; 影院电话:<input id="cinemasPhone" class="easyui-textbox" data-options="iconCls:'icon-back'" style="width:200px"></p> 
                <p>&emsp; 影院状态:<input id="cinemasStatus" class="easyui-textbox" data-options="iconCls:'icon-back'" style="width:200px"></p> 
                <a id="abutton" class="easyui-linkbutton" data-options="iconCls:'icon-undo'" style="margin-left:20px">添加</a> 
        </div>  
         `)
            $.parser.parse($(".cinemasClass"))
            $(function () {
                $('#cinemascpm #abutton').bind('click', async function () {
                    const name = $("#cinemasname").val()
                    const address = $("#cinemasaddress").val()
                    const website = $("#cinemasweb").val()
                    const phone = $("#cinemasPhone").val()
                    const status = $("#cinemasStatus").val()
                    const data = await cinemasService.addPiece({ name, address, website, phone, status });
                    $("#cinemascpm").dialog({
                        closed: true
                    });
                    alert("添加成功！");
                    that.getDate()
                });
            });

        })
    }

    modifycinemas() {
        //修改
        let that = this;
        $(".cinemasDivAll").on({
            click() {
                $(".cinemasClass").html(`
                    <div id="cinemaspop" class="easyui-dialog" title="修改影院" style="width:400px;height:330px;"   
                data-options="iconCls:'icon-save',resizable:true,modal:true">  
                <form action="" id="cinemasModify" name="cinemasModify">
                <p>&emsp; 影院名字:<input name="name" id="Mcinemasname" class="easyui-textbox" data-options="iconCls:'icon-man'" style="width:200px"> </p> 
                <p>&emsp; 影院地址:<input name="address" id="Mcinemasaddress" class="easyui-textbox" data-options="iconCls:'icon-lock'" style="width:200px"></p>
                <p>&emsp; 影院网站:<input name="website" id="Mcinemasweb" class="easyui-textbox" data-options="iconCls:'icon-filesave'" style="width:200px"></p> 
                <p>&emsp; 影院电话:<input name="phone" id="McinemasPhone" class="easyui-textbox" data-options="iconCls:'icon-back'" style="width:200px"></p> 
                <p>&emsp; 影院状态:<input name="status" id="McinemasStatus" class="easyui-textbox" data-options="iconCls:'icon-back'" style="width:200px"></p> 
                <a id="cinemasabutton" class="easyui-linkbutton" data-options="iconCls:'icon-undo'" style="margin-left:20px">修改</a> 
                </form>
        </div>  
         `)
                let obj = JSON.parse(this.dataset.id);
                let _id = obj._id;
                delete obj._id;
                $('#cinemasModify').form('load', obj);
                $.parser.parse($(".cinemasClass"))
                $(function () {
                    $('#cinemasabutton').bind('click', async function () {
                        let cinemas = $(document.cinemasModify).serialize();
                        const data = await cinemasService.modifyPiece(cinemas+`&_id=${_id}`);
                        $("#cinemaspop").dialog({
                            closed: true
                        });
                        if(data.nModified>=1){
                            alert("修改成功！");
                        }
                        that.getDate()
                    });
                });
            }
        },"#upcinemas")
    }
}