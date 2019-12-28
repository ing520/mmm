$(function(){
    $.ajax({
        type:'get',//get或post
        url:'http://localhost:3000/api/getgsshop',//请求的地址
        dataType:'json',//text,json,xml,jsonp
        success:function(res){//成功的回调函数
            $(".nav ul li:first-child").click(function(){
                $(".hide").toggleClass("arise")
                $(".hide").html(template("tmp1",res))
            })
        }
    })
    $.ajax({
        type:'get',//get或post
        url:'http://localhost:3000/api/getgsshoparea',//请求的地址
        dataType:'json',//text,json,xml,jsonp
        success:function(res){//成功的回调函数
            $(".nav ul li:nth-child(2)").click(function(){
                $(".hide2").toggleClass("arise")
                $(".hide2").html(template("tmp2",res))
            })
        }
    })
    $(".nav ul li:nth-child(3)").click(function(){
        $(".nav ul li:nth-child(3)").text("全部价格")
        $(".hide3").toggleClass("arise")
    })
    // 商品的渲染
    let shopid=0
    let areaid=0
    $(".hide").on("click",".info",function(){
        shopid=$(this).data("shop")
        $(".nav ul li:first-child").text($(this).text())
        console.log(areaid,shopid)
            render(shopid,areaid)
        $(".hide").toggleClass("arise")
    })
    $(".hide2").on("click",".info",function(){
        areaid=$(this).data("area")
        $(".nav ul li:nth-child(2)").text($(this).text())
        console.log(areaid,shopid)
        render(shopid,areaid)
        $(".hide2").toggleClass("arise")
    })
    function render(shopid,areaid){
        $.ajax({
            type:'get',//get或post
            url:'http://localhost:3000/api/getgsproduct',//请求的地址
            data:{
                shopid:shopid,
                areaid:areaid
            },//如果不需要传，则注释掉 请求的参数，a=1&b=2或{a:1,b:2}或者jq中的serialize方法，或者formData收集
            dataType:'json',//text,json,xml,jsonp
            success:function(res){//成功的回调函数
                $(".content ul").html(template("tmp3",res))
            }
        })
    }
    render(0,0)
})