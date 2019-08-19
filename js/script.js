$(function () {


    //  Adjust Header
    var winH    =   $(window).height(),
        navH    =   $(".navbar").innerHeight(),
        upperH  =   $(".upper-bar").innerHeight();
    $(".slider, .carousel-item").height(winH - (navH + upperH));

    $(window).resize(function () {
            var winH    =   $(window).height(),
            navH    =   $(".navbar").innerHeight(),
            upperH  =   $(".upper-bar").innerHeight();
            $(".slider, .carousel-item").height(winH - (navH + upperH));
    })


    // Shuffle Our Featres


    $(".features ul li").on("click", function () {

        $(this).addClass("active").siblings().removeClass("active");
        if ($(this).data("click") == ".all") {
            $(".features .row .info").css("opacity", "1")
        } else {
            $(".features .row .info").css("opacity", "0.08");
            $($(this).data("click")).parent().css("opacity", "1");
        }
    })


    // Window Scroll Function


    $(window).scroll(function() {

        if ($(this).scrollTop() >= $(".choose-us").offset().top) {

            $(".timer").countTo();
        }

        if ($(this).scrollTop() >= $(".services").offset().top) {

            $(".scroll-top").fadeIn();
        } else {
            $(".scroll-top").fadeOut();
        }

    });

    // Scroll To Top Function


    $(".scroll-top i").on("click", function () {


        $("html, body").animate({
            scrollTop: 0
        }, 1000)


    });



});