$(function(){
    // 메뉴
    $(".nav_menu>li").hover(function(){
        $(this).find(".sub").stop().show();
    }, function(){
        $(".sub").stop().hide();
    })


    // 이미지슬라이드
    // var n=0;
    // setInterval(function(){
    //     if(n==2){
    //         n=0;
    //     }else{
    //         n++;
    //     }
    //     $(".img").animate({"left" : n * (-800)+"px"},500)
    // },2000)

    setInterval(function(){
        $(".img").animate({left : "-800px"},500,function(){
                $(".img").append($(".img li").eq(0));
                $(".img").css({left : "0"})
                console.log("sdfdasf")
            })
            
    },3000)


    $(".p_click").click(function(){
        $(".popup").show();
    })
    $(".close").click(function(){
        $(".popup").hide();
    })


}) //close