import moviesService from "../service/moviesService.js";
import pager from "./pager.js"
export default class Movies {
    constructor({
        el
    }) {
        this.el = el;
        this.init()
        // $.parser.parse();
    }
    init() {
        this.render();
        // this.mounted();
        this.handle();
        $.parser.parse($("#mainMov"))
    };
    render() {
        const template = `<main id="mainMov">
        <div style="width:800px;height:40px;display:flex;flex-direction:row;align-items:center;justify-content:space-around;">
            <a id="addMovBtn" class="easyui-linkbutton" data-options="iconCls:'icon-add'">新增电影</a> 
       
            <div id="add_all" class="easyui-dialog" title="添加电影" style="width:400px;height:400px;padding:50px;" data-options="iconCls:'icon-add',resizable:true,modal:true,closed:true">
                <form action="" name="addMovies_form" class="addMovies_form">
                    <p>
                        <input name="cname" class="easyui-textbox" data-options="required:true,missingMessage:'未填写',iconCls:'icon-search',prompt:'电影名称'" style="width:300px">
                    </p>
                    <p>
                        <input name="ename" class="easyui-textbox" data-options="required:true,missingMessage:'未填写',iconCls:'icon-search',prompt:'英文名'" style="width:300px">
                    </p>
                    <p>
                        <input name="type" class="easyui-textbox" data-options="required:true,missingMessage:'未填写',iconCls:'icon-search',prompt:'类型'" style="width:300px">
                    </p>
                    <p>
                        <input name="wantSee" class="easyui-textbox" data-options="required:true,missingMessage:'未填写',iconCls:'icon-search',prompt:'想看'" style="width:300px">
                    </p>

                    <p>
                        <input name="area" class="easyui-textbox" data-options="required:true,missingMessage:'未填写',iconCls:'icon-search',prompt:'首映地区'" style="width:300px">
                    </p>
                    <p>
                        <img style="width:50px;height:50px;" id="posterimg"> <input name="poster" type="file" value="海报：选择图片">
                        <input type="button" value="上传" id="upPoster">
                    </p>
                    <p>
                        <input name="years" type="text" class="easyui-textbox" style="width:300px;" data-options="required:true,missingMessage:'未填写',prompt:'年代'" required="required">
                    </p>
                    <p>
                        <input name="time" class="easyui-textbox" data-options="required:true,missingMessage:'未填写',iconCls:'icon-search',prompt:'电影时长'" style="width:300px">
                    </p>
                    <p>
                        <input name="upDate" type="text" class="easyui-datebox" data-options="required:true,missingMessage:'未填写',prompt:'上映时间'" required="required">
                    </p>
                    <p>
                        <input name="score" class="easyui-textbox" data-options="required:true,missingMessage:'未填写',iconCls:'icon-search',prompt:'电影评分'" style="width:300px">
                    </p>
                    <p>
                        <input name="count" class="easyui-textbox" data-options="required:true,missingMessage:'未填写',iconCls:'icon-search',prompt:'电影票房'" style="width:300px">
                    </p>
                    <p>
                        <input name="intro" class="easyui-textbox" data-options="required:true,missingMessage:'未填写',iconCls:'icon-search',prompt:'剧情简介'" style="width:300px">
                    </p>
                    <p>
                        <input name="isClassic" class="easyui-textbox" data-options="required:true,missingMessage:'未填写',iconCls:'icon-search',prompt:'是否经典'" style="width:300px">
                    </p>
                    <p>
                        <input name="director" class="easyui-textbox" data-options="required:true,missingMessage:'未填写',iconCls:'icon-search',prompt:'导演名字'" style="width:300px">
                    </p>
                    <p>
                        <input name="actor" class="easyui-textbox" data-options="required:true,missingMessage:'未填写',iconCls:'icon-search',prompt:'演员名字'" style="width:300px">
                    </p>
                    <p>
                        <img style="width:50px;height:50px;" id="imgimg"> <input name="images" type="file" value="剧照：选择图片">
                        <input type="button" value="上传" id="upImg">
                    </p>
                    <p>
                        <a id="submit_btn" class="easyui-linkbutton" data-options="iconCls:'icon-search'">提交</a>
                    </p>
                </form>
            </div>
            <div id="modify_all" class="easyui-dialog" title="更新电影" style="width:400px;height:400px;padding:50px;margin-top:50px" data-options="iconCls:'icon-add',resizable:true,modal:true,closed:true">
                <form action="" name="modifyMovies_form" class="modifyMovies_form">

                    <p>
                        <input name="cname" class="easyui-textbox" data-options="required:true,missingMessage:'未填写',iconCls:'icon-search',prompt:'电影名称'" style="width:300px">
                    </p>
                    <p>
                        <input name="ename" class="easyui-textbox" data-options="required:true,missingMessage:'未填写',iconCls:'icon-search',prompt:'英文名'" style="width:300px">
                    </p>
                    <p>
                        <input name="type" class="easyui-textbox" data-options="required:true,missingMessage:'未填写',iconCls:'icon-search',prompt:'类型'" style="width:300px">
                    </p>
                    <p>
                        <input name="wantSee" class="easyui-textbox" data-options="required:true,missingMessage:'未填写',iconCls:'icon-search',prompt:'想看'" style="width:300px">
                    </p>

                    <p>
                        <input name="area" class="easyui-textbox" data-options="required:true,missingMessage:'未填写',iconCls:'icon-search',prompt:'首映地区'" style="width:300px">
                    </p>
                    <p>
                        <img style="width:50px;height:50px;" id="posterimg"> <input name="poster" type="file" value="海报：选择图片">
                        <input type="button" value="上传" id="modifyPoster">
                    </p>
                    <p>
                        <input name="years" type="text" class="easyui-textbox" style="width:300px;" data-options="required:true,missingMessage:'未填写',prompt:'年代'" required="required">
                    </p>
                    <p>
                        <input name="time" class="easyui-textbox" data-options="required:true,missingMessage:'未填写',iconCls:'icon-search',prompt:'电影时长'" style="width:300px">
                    </p>
                    <p>
                        <input name="upDate" type="text" class="easyui-datebox" data-options="required:true,missingMessage:'未填写',prompt:'上映时间'" required="required">
                    </p>
                    <p>
                        <input name="score" class="easyui-textbox" data-options="required:true,missingMessage:'未填写',iconCls:'icon-search',prompt:'电影评分'" style="width:300px">
                    </p>
                    <p>
                        <input name="count" class="easyui-textbox" data-options="required:true,missingMessage:'未填写',iconCls:'icon-search',prompt:'电影票房'" style="width:300px">
                    </p>
                    <p>
                        <input name="intro" class="easyui-textbox" data-options="required:true,missingMessage:'未填写',iconCls:'icon-search',prompt:'剧情简介'" style="width:300px">
                    </p>
                    <p>
                        <input name="isClassic" class="easyui-textbox" data-options="required:true,missingMessage:'未填写',iconCls:'icon-search',prompt:'是否经典'" style="width:300px">
                    </p>
                    <p>
                        <input name="director" class="easyui-textbox" data-options="required:true,missingMessage:'未填写',iconCls:'icon-search',prompt:'导演名字'" style="width:300px">
                    </p>
                    <p>
                        <input name="actor" class="easyui-textbox" data-options="required:true,missingMessage:'未填写',iconCls:'icon-search',prompt:'演员名字'" style="width:300px">
                    </p>
                    <p>
                        <img style="width:50px;height:50px;" id="modimgs"> <input name="images" type="file" value="设置剧照">
                        <input type="button" value="上传" id="modifyImg">
                    </p>
                    <p>
                        <a id="modify_btn" class="easyui-linkbutton" data-options="iconCls:'icon-search'">提交</a>
                    </p>
                </form>
            </div>
            <input id="searchBoxlq">
            <div id="searchInput" style="width:300px">
                <div data-options="name:'all',iconCls:'icon-ok'">全部</div>
                <div data-options="name:'cname'">电影名</div>
                <div data-options=" name:'type'">类型</div>
                <div data-options="name:'director'">导演</div>
                <div data-options="name:'score'">评分</div>
            </div>
            </div>
        <table id="movgrid"></table>
        </main>`
        $(this.el).html(template);
        this.getMovies();
    }
    handle() {
        let that = this;
        //添加
        $("#addMovBtn").click(function () {
            $("#add_all").dialog({
                closed: false
            })
            //图片
            $("#add_all").on("click", "#upPoster", async function () {
                const file = $("#add_all input[type='file']")[0].files[0];
                const fd = new FormData();
                fd.append("img", file);
                pager.posterInfor = await moviesService.upload(fd);
                $("#add_all img")[0].src = pager.posterInfor.filePath;
            })
            $("#add_all").on("click", "#upImg", async function () {
                const file = $("#add_all input[type='file']")[1].files[0];
                const fd = new FormData();
                fd.append("img", file);
                pager.imgInfor = await moviesService.upload(fd);
                $("#add_all img")[1].src = pager.imgInfor.filePath;
            })
            $("#submit_btn").click(async function () {
                const addMovInfor = $(document.addMovies_form).serialize() + `&poster=${$("#add_all img")[0].src}&images=${$("#add_all img")[1].src}`;
                const addMovResult = await moviesService.addMovie(addMovInfor);
                if (addMovResult) {
                    that.getMovies();
                } else {
                    alert("添加失败")
                }
                that.getMovies()
                $("#add_all").dialog({
                    closed: false
                })
            })
        })
        //搜索
        $('#searchBoxlq').searchbox({
            searcher: async function (value, searchName) {
                // console.log(value, searchName)
                if (searchName == 'all') {
                    that.getMovies()
                } else {
                    const searchData = await moviesService.searchMovie({
                        [searchName]: value
                    })
                    // console.log("searchDate", searchData)
                    that.movgrid(searchData)
                }
            },
            menu: '#searchInput',
            prompt: '请输入查询字段'
        });


        //更新
        let fillMov;
        $("#mainMov").on("click", "input[value='更新']", async function () {
            fillMov = pager.row.filter((v, i) => {
                if (this.dataset.id == v._id) {
                    return v
                }
            })
            $("#modify_all").dialog({
                closed: false
            })
            $("#modify_all .modifyMovies_form").form("load", {
                cname: `${fillMov[0].cname}`,
                ename: `${fillMov[0].ename}`,
                type: `${fillMov[0].type}`,
                wantSee: `${fillMov[0].wantSee}`,
                area: `${fillMov[0].area}`,
                // poster: `${fillMov[0].poster}`,
                years: `${fillMov[0].years}`,
                time: `${fillMov[0].time}`,
                upDate: `${fillMov[0].upDate}`,
                score: `${fillMov[0].score}`,
                count: `${fillMov[0].count}`,
                intro: `${fillMov[0].intro}`,
                isClassic: `${fillMov[0].isClassic}`,
                director: `${fillMov[0].director}`,
                actor: `${fillMov[0].actor}`
                // images: `${modifyMov[0].images}`,
            })
            $("#modify_all img")[0].src = fillMov[0].poster;
            $("#modify_all img")[1].src = fillMov[0].images;
            $("#modify_all").on("click", "#modifyPoster", async function () {
                const file = $("#modify_all input[type='file']")[0].files[0];
                const fd = new FormData();
                fd.append("img", file);
                pager.modifyPoster = await moviesService.upload(fd);
                $("#modify_all img")[0].src = pager.modifyPoster.filePath;
            })
            $("#modify_all").on("click", "#modifyImg", async function () {
                const file = $("#modify_all input[type='file']")[1].files[0];
                const fd = new FormData();
                fd.append("img", file);
                pager.modifyImg = await moviesService.upload(fd);
                $("#modify_all img")[1].src = pager.modifyImg.filePath;
            })
        })
        $("#modify_btn").click(async function () {
            const modifyMov = $(".modifyMovies_form").serialize() + `&_id=${fillMov[0]._id}&poster=${$("#modify_all img")[0].src}&images=${$("#modify_all img")[1].src}`;
            const modifyResult = await moviesService.modifyMovie(modifyMov);
            if (modifyResult.nModified >= 1) {
                alert("更新成功");
                $("#modify_all").dialog({
                    closed: true
                })
                that.getMovies();
            } else {
                alert("更新失败");
                $("#modify_all").dialog({
                    closed: true
                })
            }
        })
        //删除
        $("#mainMov").on("click", "input[value='删除']", async function () {
            let deleteMov = pager.row.filter((v, i) => {
                if (this.dataset.id == v._id) {
                    return v
                }
            })
            let isDelete = confirm(`确认删除电影${deleteMov[0].cname}的相关信息吗？`);
            if (isDelete) {
                let deleteInfor = await moviesService.deleteMovie(deleteMov[0]);
                if (deleteInfor) {
                    alert("删除成功");
                    that.getMovies();
                } else {
                    alert("删除失败")
                }
            }
        })
    }
    async getMovies() {
        const allMovies = await moviesService.getMovies({});
        pager.row = allMovies.row;
        this.movgrid(pager.row)
    }
    async movgrid(movieData) {
        $("#mainMov #movgrid").datagrid({
            fitColumns: true,
            pagination: true,
            rownumbers: true,
            pageList: [5, 10, 20],
            data: movieData.slice(0, 10),
            columns: [
                [{
                        field: '_id',
                        align: "center",
                        title: "id",
                        width: 50
                    },
                    {
                        field: 'cname',
                        align: "center",
                        title: "中文名",
                        width: 80
                    },
                    {
                        field: 'ename',
                        align: "center",
                        title: "英文名",
                        width: 80
                    },
                    {
                        field: 'type',
                        align: "center",
                        title: "类型",
                        width: 50
                    },
                    {
                        field: 'wantSee',
                        align: "center",
                        title: "想看",
                        width: 50
                    },
                    {
                        field: 'area',
                        align: "center",
                        title: "首映地",
                        width: 50
                    },
                    {
                        field: 'poster',
                        align: "center",
                        title: "海报",
                        width: 100,
                        formatter(value, row, index) {
                            return `<img src='${row.poster}' style="width:50px;height:50px;">`
                        }
                    },
                    {
                        field: 'years',
                        align: "center",
                        title: "年代",
                        width: 60
                    },
                    {
                        field: 'time',
                        align: "center",
                        title: "时长",
                        width: 60
                    },
                    {
                        field: 'upDate',
                        align: "center",
                        title: "大陆上映",
                        width: 60
                    },
                    {
                        field: 'score',
                        align: "center",
                        title: "评分",
                        width: 50
                    },
                    {
                        field: 'count',
                        align: "center",
                        title: "票房",
                        width: 50
                    },
                    {
                        field: 'intro',
                        align: "center",
                        title: "剧情简介",
                        width: 150
                    },
                    {
                        field: 'isClassic',
                        align: "center",
                        title: "经典",
                        width: 50
                    },
                    {
                        field: 'director',
                        align: "center",
                        title: "导演",
                        width: 50
                    },
                    {
                        field: 'actor',
                        align: "center",
                        title: "演员",
                        width: 100
                    },
                    {
                        field: 'images',
                        align: "center",
                        title: "剧照",
                        width: 100,
                        formatter(value, row, index) {
                            return `<img src='${row.images}' style="width:50px;height:50px;">`
                        }
                    }, {
                        field: 'control',
                        align: 'center',
                        title: '操作',
                        width: 150,
                        formatter(value /*当前匹配字段的值*/ , row /*当前这一行这个数据对象*/ , index) {
                            return `<input type="button" data-id='${row._id}' value="更新">
                            <input type="button" data-id='${row._id}' value="删除">`
                        }
                    }
                ]
            ]
        });
        //条件查询，下拉列表选项渲染
        //获取冻结的数据源并返回key,value格式数据
        // var GetFrozeData = function (gridStr, isFroze) {
        //     //获取所有未冻结列数据
        //     var cols = $(gridStr).datagrid('getColumnFields', isFroze);
        //     var array = [];
        //     for (var i in cols) {
        //         //获取每一列的列名对象
        //         var col = $(gridStr).datagrid("getColumnOption", cols[i]);
        //         //声明对象
        //         var obj = new Object();
        //         obj["value"] = cols[i];
        //         obj["title"] = col.title.trim();
        //         //追加对象
        //         array.push(obj);
        //     }
        //     return array;
        // }
        // let selectArr = GetFrozeData($("#mainMov #movgrid"));
        // pager.selectArr = selectArr;
        // let template = pager.selectArr.map((v, i) => {
        //     if (v.value != "_id" && v.value != "intro" && v.value != "wantSee" && v.value != "poster" && v.value != "images" && v.value != "control") {
        //         return `<option data-id='${v.value}'>${v.title}</option>`
        //     }
        // }).join("");
        // $("#searchMov").html(template)
        const paginater = $("#mainMov #movgrid").datagrid("getPager");
        paginater.pagination({
            total: movieData.length,
            onSelectPage: function (pageNo, pageSize) {
                const start = (pageNo - 1) * pageSize;
                const end = start + pageSize;
                $("#mainMov #movgrid").datagrid('loadData', movieData.slice(start, end));
                paginater.pagination('refresh', {
                    total: movieData.length,
                    pageNumber: pageNo
                })
            }
        })
    }
}