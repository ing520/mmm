$(function () {
    let categoryid = location.search.split("?categoryid=")[1].split("&")[0];
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
    function render(pageid) {
        $.ajax({
            type: 'get',//get或post
            url: 'http://localhost:3000/api/getproductlist',//请求的地址
            data: {
                pageid: pageid,
                categoryid: categoryid
            },
            dataType: 'json',
            success: function (res) {
                count = res.result.count
                $(".floor ul").html(template("tmp2", res.result))
                $(".page select").html(template("tmp3", res.result))
            }
        })
    }
  
    // 下拉列表2
     $(".page select").change(function () {
        let currentPage = $(".page select option:checked").val()
        console.log($(".page select option:checked").val());
        // console.log($(".page select option:checked"), currentPage)
        setpage(currentPage, count)
        render(currentPage)
        $("#select").html(currentPage)
        console.log($("#select").text("currentPage"));
    })
   
    // 分页
    let pagesize = 10
    function setpage(currentPage, total) {
        let pageCount = Math.ceil(total / pagesize)
        $(".page #prev").click(function () {
            currentPage--
            render(currentPage)
        })
        $(".page #next").click(function () {
            console.log("jsakkdj")
            currentPage++
            render(currentPage)
        })
    }
    // let brandtitleid = parseInt(location.search.split("&")[3].split("=")[1])
    let brandtitleid =parseInt(location.search.split("=")[1].split("&")[0])
   // 根据url地址判断，来自哪个页面，进行渲染
    function render1() {
        console.log("111")
        $.ajax({
            type:'get',//get或post
            url:'http://localhost:3000/api/getbrandproductlist',//请求的地址
            data:{
                brandtitleid:brandtitleid,
                pagesize:pagesize
            },//如果不需要传，则注释掉 请求的参数，a=1&b=2或{a:1,b:2}或者jq中的serialize方法，或者formData收集
            dataType:'json',//text,json,xml,jsonp
            success:function(res){//成功的回调函数
                console.log(res)
                $(".floor ul").html(template("tmp2", res.result))
    
                // 添加
                $(".page select").html(template("tmp3", res.result))
    
                    console.log($(".page select"))
                    $(".page select").click("option", function () {
                        let currentPage = $(".page select option:checked").val()
                        console.log($(".page select option:checked"), currentPage)
                        setpage(currentPage, res.result.count)
                        render(currentPage)
                    })
            }
        })
    }
    if(location.search.indexOf("brandTitleid")==-1){
        render(1)
        // console.log("if")
    }
    else{
        // console.log("else")
        render1()
    }
   
})