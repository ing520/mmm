$(function () {
    // 获取首页上菜单栏数据
    function render() {
        $.ajax({
            type: "get",
            dataType: "json",
            url: "http://localhost:3000/api/getindexmenu",
            success: function (res) {
                $(".banner ul").html(template("tmp1",res))
            }
        })
    }
    render();
    $(".banner ul").on("click",".li",function(){
        $(".banner ul").find(".li:nth-child(n+9)").toggleClass("active");
        // $(".banner ul .li:nth-child(n+9)").toggleClass("active");
    })
    //获取折扣列表内容
  function discount_render(){
      $.ajax({
          type:'get',//get或post
          url:'http://localhost:3000/api/getmoneyctrl',//请求的地址
          data:{
              pageid:1
          },//如果不需要传，则注释掉 请求的参数，a=1&b=2或{a:1,b:2}或者jq中的serialize方法，或者formData收集
          dataType:'json',//text,json,xml,jsonp
          success:function(res){//成功的回调函数
            console.log(res)
            $(".discount .main ul").html(template("tmp2",res))
          }
      })
  }
  discount_render()
})
