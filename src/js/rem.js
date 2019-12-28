// rem适配
$(window).resize(function(){
    // 设计图/50=屏幕大小/当前屏幕的font-size
    let width=$(window).width()
    Math.max(width,320)
    Math.min(width,750)
    let fontSize=width/15
    $("html").css("fontSize",fontSize.toFixed(2)+"px")

})
$(window).resize()