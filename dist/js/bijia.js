$(function(){
    let id = parseInt(location.search.split("?productId=")[1].split("&")[0])
    $.ajax({
        type: 'get',//get或post
        url: 'http://localhost:3000/api/getcategorybyid',//请求的地址
        data: {
            categoryid: id
        },
        dataType: 'json',//text,json,xml,jsonp
        success: function (res) {//成功的回调函数
            $(".nav").html(template("tmp1", res))
        }
    })

    let productid=parseInt(location.search.split("?productId=")[1].split("&")[0])
    $.ajax({
        type:'get',//get或post
        url:'http://localhost:3000/api/getproduct',//请求的地址
        data:{
            productid:productid
        },//如果不需要传，则注释掉 请求的参数，a=1&b=2或{a:1,b:2}或者jq中的serialize方法，或者formData收集
        dataType:'json',//text,json,xml,jsonp
        success:function(res){//成功的回调函数
            $(".product").html(template("tmp2",res))
            $("table").html(template("tmp4",res))
        }
    })
    $.ajax({
        type:'get',//get或post
        url:'http://localhost:3000/api/getproductcom',//请求的地址
        data:{
            productid :productid
        },//如果不需要传，则注释掉 请求的参数，a=1&b=2或{a:1,b:2}或者jq中的serialize方法，或者formData收集
        dataType:'json',//text,json,xml,jsonp
        success:function(res){//成功的回调函数
            console.log(res)
            $(".main").html(template("tmp3",res))
        }
    })
})