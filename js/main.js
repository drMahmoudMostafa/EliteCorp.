/*global $, document, setInterval, window, clearInterval, console*/

$(document).ready(function () {
    "use strict";
    // trigger niceScroll

    $("html").niceScroll({
        cursorcolor: "#e81a2e",
        cursorborder: "none"
    });

    // get slider height

    var winH = $(window).innerHeight(),
        upperH = $(".upper-bar").innerHeight(),
        navH = $(".navbar").innerHeight();

    $(".slider,.slider .carousel-item").height(winH - (upperH + navH))

    // set works shuffle

    $(".works ul li").on("click", function () {
        $(this).addClass("active").siblings().removeClass('active');
        if ($(this).data('class') === ".all") {
            $(".shuffle .col-md").css("opacity", "1")
        } else {
            $(".shuffle .col-md").css("opacity", ".1");
            $($(this).data('class')).css("opacity", "1")
        }
    })
    

})
