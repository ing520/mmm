$(function(){
    function render(){
        $.ajax({
            type:'get',//get或post
            url:'http://localhost:3000/api/getcategorytitle',//请求的地址
            dataType:'json',//text,json,xml,jsonp
            success:function(res){//成功的回调函数
                $(".list ul").html(template("tmp1",res))
            }
        })
    }
    render()
    $(".list ul").on("click",".list-tit a",function(){
       let id= $(this).data('id');
       $(this).next().toggleClass("content")
    console.log($(this).siblings())
    let that=$(this).siblings()
        $.ajax({
            type:'get',//get或post
            url:'http://localhost:3000/api/getcategory',//请求的地址
            data:{
                titleid: id
            },//如果不需要传，则注释掉 请求的参数，a=1&b=2或{a:1,b:2}或者jq中的serialize方法，或者formData收集
            dataType:'json',//text,json,xml,jsonp
            success:function(res){//成功的回调函数
                console.log(res)
                that.html(template("tmp2",res))
            }
        })

    })

})