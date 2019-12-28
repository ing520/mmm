$(function(){
    let couponid=parseInt(location.search.split("?couponid=")[1].split("&")[0])
    1
    $.ajax({
        type:'get',//get或post
        url:'http://localhost:3000/api/getcouponproduct',//请求的地址
        data:{
            couponid:couponid
        },//如果不需要传，则注释掉 请求的参数，a=1&b=2或{a:1,b:2}或者jq中的serialize方法，或者formData收集
        dataType:'json',//text,json,xml,jsonp
        success:function(res){//成功的回调函数
            console.log(res)
            $(".info ul").html(template("tmp",res))
        }
    })
})