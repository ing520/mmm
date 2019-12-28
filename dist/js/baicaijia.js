$(function(){
    $.ajax({
        type:'get',//get或post
        url:'http://localhost:3000/api/getbaicaijiatitle',//请求的地址
        dataType:'json',//text,json,xml,jsonp
        success:function(res){//成功的回调函数
            console.log(res)
            $(".nav ul").html(template("tmp1",res))

        }
    })
    let titleid;
    $(".nav ul").on("click","li",function(){
      console.log($(this).data("id"))
    titleid=$(this).data("id");
    render(titleid)
    })
   function render(titleid){
    $.ajax({
        type:'get',//get或post
        url:'http://localhost:3000/api/getbaicaijiaproduct',//请求的地址
        data:{
            titleid:titleid
        },//如果不需要传，则注释掉 请求的参数，a=1&b=2或{a:1,b:2}或者jq中的serialize方法，或者formData收集
        dataType:'json',//text,json,xml,jsonp
        success:function(res){//成功的回调函数
            console.log(res)
            $(".info ul").html(template("tmp2",res))
        }
    })
   }
   render(titleid)
})