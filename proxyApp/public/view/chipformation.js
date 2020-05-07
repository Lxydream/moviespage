import chipformationService from "../service/chipformationService.js";
import moviesService from "../service/moviesService.js";
import cinemasService from "../service/cinemasService.js";
import hallsService from "../service/hallsService.js";

export default class {
    constructor({
        el
    }) {
        this.el = el;
        this.init();
        this.reu = null;
        this.gxreu = null;
        this.pageNo = 1;
    }
    init() {
        this.render();
        this.mounted();
        this.handle();
        this.rowPiece();
        // $.parser.parse()
    }
    render() { //负责页面渲染
        const template = `
        <main class="lzzuode">
        <a id="addMovies" class="easyui-linkbutton" data-options="iconCls:'icon-add'">添加排片</a> 
        <input id="searchText" style="width:300px"
        data-options="prompt:'请输入你要查询的字段'">
    <div id="searchMenu" style="width:120px">
        <div data-options="name:'cname',iconCls:'icon-ok'">电影名</div>
        <div data-options="name:'type'">类型</div>
        <div data-options="name:'director'">导演</div>
        <div data-options="name:'namae1'">影院</div>
        <div data-options="name:'namae'">放映厅</div>
    </div>
        <div id="all_lz" class="easyui-dialog" title="新增排片" style="width:400px;height:400px;padding:50px" data-options="iconCls:'icon-add',resizable:true,modal:true,closed:true">
        <form action="" id="movies_form" name="addForm">
            <p>
                <select id="addmovise" name="cname" class="easyui-combobox" data-options="required:true,missingMessage:'未填写',iconCls:'icon-search',prompt:'电影名称'"
                    style="width:300px"></select> 
            </p>
            <p>
                <select id="addcinemas" name="namae1" class="easyui-combobox" data-options="required:true,missingMessage:'未填写',iconCls:'icon-search',prompt:'影院'"
                    style="width:300px"></select> 
            </p>
            <p>
                <select id="addhalls" name="namae" class="easyui-combobox" data-options="required:true,missingMessage:'未填写',iconCls:'icon-search',prompt:'放映厅'"
                    style="width:300px"></select> 
            </p>
            <p>
                    <input class="easyui-datetimebox" name="showTime"     
        data-options="required:true,showSeconds:false" value="2010-3-10" style="width:300px">  

            </p>

            <p>
                <input name="price" class="easyui-textbox" data-options="required:true,missingMessage:'未填写',iconCls:'icon-search',prompt:'票价'"
                    style="width:300px">
            </p>
            <p>
                <a id="submit_btnlz" class="easyui-linkbutton" data-options="iconCls:'icon-search'">提交</a>
            </p>
        </form>
    </div>


    <div id="gx_all" class="easyui-dialog" title="修改排片" style="width:400px;height:400px;padding:50px" data-options="iconCls:'icon-add',resizable:true,modal:true,closed:true">
        <form action="" id="gxForm" name="gxForm">
        <p>
        <input name="_id" type="hidden">
        </p>
            <p class="isp1">
                <select id="gxmovise" name="cname" class="easyui-combobox" data-options="required:true,missingMessage:'未填写',iconCls:'icon-search',prompt:'电影名称'"
                    style="width:300px"></select> 
            </p>
            <p class="isp2">
                <select id="gxcinemas" name="namae1" class="easyui-combobox" data-options="required:true,missingMessage:'未填写',iconCls:'icon-search',prompt:'影院'"
                    style="width:300px"></select> 
            </p>
            <p class="isp3">
                <select id="gxhalls" name="namae" class="easyui-combobox" data-options="required:true,missingMessage:'未填写',iconCls:'icon-search',prompt:'放映厅'"
                    style="width:300px"></select> 
            </p>
            <p>
                    <input class="easyui-datetimebox" name="showTime"     
        data-options="required:true,showSeconds:false" value="2010-3-10" style="width:300px">  

            </p>
            <p>
                <input name="price" class="easyui-textbox" data-options="required:true,missingMessage:'未填写',iconCls:'icon-search',prompt:'票价'"
                    style="width:300px">
            </p>
            <p>
                <a id="gxmit_btn" class="easyui-linkbutton" data-options="iconCls:'icon-search'">提交</a>
            </p>
        </form>
    </div>

    
    <selection id="chip">
        <table id="dbgtable">
        </table>
        </selection>
        </main>
        `;
        $(this.el).html(template);
        // $.parser.parse(this.el);
        this.addmovies();
        this.addcinemas();
        this.addhalls();
        this.gxmovies();
        this.gxcinemas();
        this.gxhalls();
        this.sousuo();
        $.parser.parse($(".lzzuode"))
    }
    mounted() {



    }
    handle() { //负责事件监听
        // 添加
        let that = this;
        $("#addMovies").click(async function () {
            $("#all_lz").dialog({
                closed: false
            })
        })
        // 更新
        $("#chip").on({
            async click() {
                that.gxreu = $(this).attr("data-id");
                // console.log(that.gxreu);
                that.gx();
                $.parser.parse($("#chip"));
                $("#gx_all").dialog({
                    closed: false
                })
            }
        }, ".xg_btn")

        // 添加后关闭
        $("#all_lz").on({
            async click() {
                let result = await chipformationService.addPiece($(document.addForm).serialize());
                that.rowPiece();
                // $("#all_lz").window('close');
                $("#all_lz").dialog({
                    closed: true
                })
                // $("#dbgtable").datagrid('reload');
            }
        }, "#submit_btnlz")
        // 更新后关闭
        $("#gx_all").on({
            async click() {
                let result = await chipformationService.gxPiece($(document.gxForm).serialize());
                that.rowPiece();
                // $("#all_lz").window('close');
                $("#gx_all").dialog({
                    closed: true
                })
                // $("#dbgtable").datagrid('reload');
            }
        }, "#gxmit_btn")


        // 删除
        $("#chip").on({
            async click() {
                let num = this.dataset.id;
                let issure = confirm(`你确定要删除吗`);
                if (issure) {
                    await chipformationService.deletePiece(num);
                    alert("删除成功");
                    that.rowPiece();
                }
            }
        }, ".sc_btn")


    }
    // 添加电影渲染
    async addmovies() {
        let data = await moviesService.getPiece();
        let result = data.map(v => `<option value="${v._id}">${v.cname}</option>`);
        $("#addmovise").html(result);
        $.parser.parse("#movies_form")

    }
    // 添加影院渲染
    async addcinemas() {
        let data = await cinemasService.getPiece();
        let result = data.map(v => `<option value="${v._id}">${v.name}</option>`);
        $("#addcinemas").html(result)
        $.parser.parse("#movies_form")
    }
    // 添加放映厅渲染
    async addhalls() {
        let data = await hallsService.getPiece();
        let result = data.map(v => `<option value="${v._id}">${v.name}</option>`);
        $("#addhalls").html(result)
        $.parser.parse("#movies_form")
    }
    // displayPiece(data){

    // }
    // 渲染数据
    async rowPiece() {
        let that = this;
        let data = await chipformationService.getPiece();
        this.reu = data;
        $("#dbgtable").datagrid({
            title: "拍片管理",
            pagination: true,
            fitColumns: true,
            rownumbers: false,
            pageList: [5, 10, 15],
            data: data.slice(0, 10),
            columns: [
                [{
                    field: '_id',
                    align: "center",
                    title: "_id",
                    width: 50
                },
                {
                    field: 'cname',
                    align: "center",
                    title: "电影名",
                    width: 100
                },
                {
                    field: 'type',
                    align: "center",
                    title: "类型",
                    width: 100
                },
                {
                    field: 'showTime',
                    align: "center",
                    title: "放映时间",
                    width: 150
                },
                {
                    field: 'actor',
                    align: "center",
                    title: "演员",
                    width: 100,
                },
                {
                    field: 'director',
                    align: "center",
                    title: "导演",
                    width: 50
                },
                {
                    field: 'price',
                    align: "center",
                    title: "票价",
                    width: 70
                },
                {
                    field: 'namae1',
                    align: "center",
                    title: "影院",
                    width: 100
                },
                {
                    field: 'namae',
                    align: "center",
                    title: "放映厅",
                    width: 100
                },
                {
                    field: 'control',
                    align: "center",
                    title: "操作",
                    width: 100,
                    formatter(value /*当前匹配字段的值*/, row /*当前这一行这个数据对象*/, index) {
                        return `<input type="button" data-id='${row._id}' value="删除电影" class="sc_btn"><input type="button" data-id='${that.pageNo - 1 + "" + index - 0}' value="修改电影" class="xg_btn">`
                    }
                }
                ]
            ]
        });
        const pager = $("#dbgtable").datagrid("getPager");
        pager.pagination({
            total: data.length,
            onSelectPage: function (pageNo, pageSize) {
                console.log(pageNo, pageSize);
                that.pageNo = pageNo;
                const start = (pageNo - 1) * pageSize;
                const end = start + pageSize;
                $("#dbgtable").datagrid("loadData", data.slice(start, end));
                pager.pagination('refresh', {
                    total: data.length,
                    pageNumber: pageNo
                });
            }
        });
        // console.log(data);
        // displayPiece(data);
        // $(".sc_btn").click(async function () {
        //     let num = this.dataset.id;
        //     // console.log(num);
        //     if (confirm(`你确定要删除吗`)) {
        //         await chipformationService.deletePiece(num);
        //         that.rowPiece();
        //         alert("删除成功");
        //     }
        // })
    }
    // 更新渲染数据
    async gx() {
        let reu = this.reu;
        let gxreu = this.gxreu;
        // console.log();

        $("#gxForm").form("load", {
            _id: `${reu[gxreu]._id}`,
            cname: `${reu[gxreu].cname}`,
            namae1: `${reu[gxreu].namae1}`,
            namae: `${reu[gxreu].namae}`,
            showTime: `${reu[gxreu].showTime}`,
            price: `${reu[gxreu].price}`,
        });
        $(".isp1 input").attr("value",`${reu[gxreu].movieId}`);
        $(".isp2 input").attr("value",`${reu[gxreu].cinemasId}`);
        $(".isp3 input").attr("value",`${reu[gxreu].theaterId}`);
    }
    // 更新电影
    async gxmovies() {
        let data = await moviesService.getPiece();
        let result = data.map(v => `<option value="${v._id}">${v.cname}</option>`);
        $("#gxmovise").html(result)
        $.parser.parse("#gxForm")
    }
    // 更新影院
    async gxcinemas() {
        let data = await cinemasService.getPiece();
        let result = data.map(v => `<option value="${v._id}">${v.name}</option>`);
        $("#gxcinemas").html(result)
        $.parser.parse("#gxForm")
    }
    // 添加放映厅渲染
    async gxhalls() {
        let data = await hallsService.getPiece();
        let result = data.map(v => `<option value="${v._id}">${v.name}</option>`);
        $("#gxhalls").html(result)
        $.parser.parse("#gxForm")
    }

    async sousuo() {
        let that = this
        $('#searchText').searchbox({
            menu: "#searchMenu",
            // searcher: async function (value, seach_name) {
            //     if ($('#searchText').val() == "") {
            //         that.rowPiece();
            //     } else {
            //         // searchArr = newData.filter((v, i) => value == v[seach_name]);
            //         const data = await chipformationService.getPiece({
            //             [seach_name]: value
            //         });
            //         console.log(value, seach_name);
            //         console.log(data);
            //         that.displayPiece(data);
            //     }
            // }
        })
    }
}