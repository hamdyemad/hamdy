$(function () {


    $("header").height($(window).height());
    $(window).resize(function () {
        $("header").height($(window).height());
    })
    

    // Start Projects Tabs


    $(".tabs ul li").on("click", function () {

        $(this).addClass("selected").siblings().removeClass("selected");
        $(".info-tabs div").hide();
        $(".tabs img").hide();
        $($(this).data("tabs")).fadeIn(400);

    })
   
})