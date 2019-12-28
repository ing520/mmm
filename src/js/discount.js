$(function(){
let id=parseInt(location.search.split("?productid=")[1].split("&")[0])
$.ajax({
    type:'get',//get或post
    url:'http://localhost:3000/api/getdiscountproduct',//请求的地址
    data:{
        productid:id
    },//如果不需要传，则注释掉 请求的参数，a=1&b=2或{a:1,b:2}或者jq中的serialize方法，或者formData收集
    dataType:'json',//text,json,xml,jsonp
    success:function(res){//成功的回调函数
    $(".main .one").html(template("tmp1",res))
    }
})})