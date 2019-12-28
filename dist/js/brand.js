$(function(){
let brandtitleid=parseInt(location.search.split("?brandtitleid=")[1].split("&")[0])
    $.ajax({
        type:'get',//get或post
        url:'http://localhost:3000/api/getbrand',//请求的地址
        data:{
            brandtitleid:brandtitleid
        },//如果不需要传，则注释掉 请求的参数，a=1&b=2或{a:1,b:2}或者jq中的serialize方法，或者formData收集
        dataType:'json',//text,json,xml,jsonp
        success:function(res){//成功的回调函数
            console.log(res)
            $(".banner ul").html(template("tmp1",res))
        }
    })
    // $(".banner ul").on("click","li",function(){
    //     let brandtitleid= $(this).data("brandTit")
    //     let pagesize=10
    //     $.ajax({
    //         type:'get',//get或post
    //         url:'http://localhost:3000/api/getbrandproductlist',//请求的地址
    //         data:{
    //             brandtitleid:brandtitleid,
    //             pagesize:pagesize
    //         },//如果不需要传，则注释掉 请求的参数，a=1&b=2或{a:1,b:2}或者jq中的serialize方法，或者formData收集
    //         dataType:'json',//text,json,xml,jsonp
    //         success:function(res){//成功的回调函数
    //             console.log(res)
    //         }
    //     })
        
    // })
})