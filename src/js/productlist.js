$(function () {
    let categoryid = location.search.split("?categoryid=")[1].split("&")[0];
    // 路径导航请求
    $.ajax({
        type: 'get',//get或post
        url: 'http://localhost:3000/api/getcategorybyid',//请求的地址
        data: {
            categoryid: categoryid
        },
        dataType: 'json',//text,json,xml,jsonp
        success: function (res) {//成功的回调函数
            $(".nav").html(template("tmp1", res))
        }
    })
    let count;
    // 分页请求
    let pagesize = 10
    let pageCount = null
    let currentPage = null
    function render(currentPage) {
        $.ajax({
            type: 'get',//get或post
            url: 'http://localhost:3000/api/getproductlist',//请求的地址
            data: {
                pageid: currentPage,
                categoryid: categoryid
            },
            dataType: 'json',
            success: function (res) {
                count = res.result.count
                pageCount = Math.ceil(count / pagesize)
                $(".floor ul").html(template("tmp2", res.result))
                var str = "111"
                console.log(pageCount)
                for (var i = 0; i < pageCount; i++) {
                    if (currentPage == i + 1) {
                        str += `<option value="${i + 1}" selected>第${i + 1}页</option>`
                    }
                    else {
                        str += `<option value="${i + 1}">第${i + 1}页</option>`
                    }
                }
                $("#select").html(str)
                console.log(str)
                console.log($("#select").html(str));
            }
        })
    }

    // 下拉列表2

    $(".page select").on("change", function () {
    // currentPage = this.value
    currentPage = $(".page select option:checked").val()
        render(currentPage)
    })
    $(".page #prev").click(function () {
        currentPage--
        if (currentPage <= 0) {
            currentPage = 1
          }
        render(currentPage)
    })
    $(".page #next").click(function () {
        currentPage++

        if (currentPage >= pageCount) {
            currentPage = pageCount
          }
        render(currentPage)
    })

    let brandtitleid = parseInt(location.search.split("=")[1].split("&")[0])
    // 根据url地址判断，来自哪个页面，进行渲染
    function render1() {
        $.ajax({
            type: 'get',//get或post
            url: 'http://localhost:3000/api/getbrandproductlist',//请求的地址
            data: {
                brandtitleid: brandtitleid,
                pagesize: pagesize
            },//如果不需要传，则注释掉 请求的参数，a=1&b=2或{a:1,b:2}或者jq中的serialize方法，或者formData收集
            dataType: 'json',//text,json,xml,jsonp
            success: function (res) {//成功的回调函数
                console.log(res)
            }
        })
    }
    if (location.search.indexOf("brandTitleid") == -1) {
        render(1)
        // console.log("if")
    }
    else {
        // console.log("else")
        render1()
    }

})