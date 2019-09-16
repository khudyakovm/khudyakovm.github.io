( function( $ ) {

    "use strict";

    $('.smooth-scroll').click(function(){
        $('html, body').animate({
            scrollTop: $( $(this).attr('href') ).offset().top - 50
        }, 1000);
        return false;
    });

    
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (scroll >= 50) {
            $(".sticky").addClass("nav-sticky");
        } else {
            $(".sticky").removeClass("nav-sticky");
        }

       
        if ($(this).scrollTop() > 80) {
            $('.back-to-top').fadeIn();
        } else {
            $('.back-to-top').fadeOut();
        }
    });
    if (scroll > 50) {
        $(".sticky").addClass("nav-sticky");
    }

}( jQuery ) );