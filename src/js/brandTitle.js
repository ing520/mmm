$(function(){
    $.ajax({
        type:'get',//get或post
        url:'http://localhost:3000/api/getbrandtitle',//请求的地址
        dataType:'json',//text,json,xml,jsonp
        success:function(res){//成功的回调函数
            console.log(res)
            $(".banner ul").html(template("tmp1",res))
        }
    })
})