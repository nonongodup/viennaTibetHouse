'use strict';

(function ($) {

    $(window).on('load', function () {
        $(".loader").fadeOut();
        $("#preloder").delay(200).fadeOut("slow");
    });

    $('.set-bg').each(function () {
        var bg = $(this).data('setbg');
        $(this).css('background-image', 'url(' + bg + ')');
    });


    $(".mobile-menu").slicknav({
        prependTo: '#mobile-menu-wrap',
        allowParentLinks: true
    });


    $(".datepicker-1").datepicker();
    $(".datepicker-2").datepicker();


    $('.suit-select').niceSelect();


    var hero_s = $(".ri-sliders");
    hero_s.owlCarousel({
        loop: true,
        margin: 0,
        nav: false,
        items: 1,
        dots: true,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        smartSpeed: 1200,
        autoHeight: false,
        autoplay: false,
        onInitialized: function () {
            var a = this.items().length;
            $("#snh-1").html("<span>1</span><span>" + a + "</span>");
        }
    });


    $('.counter').each(function () {
        $(this).prop('Counter',0).animate({
        Counter: $(this).text()
        }, {
            duration: 4000,
            easing: 'swing',
            step: function (now) {
            $(this).text(Math.ceil(now));
            }
        });
    });


    var proQty = $('.pro-qty');
    proQty.prepend('<span class="dec qtybtn">-</span>');
    proQty.append('<span class="inc qtybtn">+</span>');
    proQty.on('click', '.qtybtn', function () {
        var $button = $(this);
        var oldValue = $button.parent().find('input').val();
        if ($button.hasClass('inc')) {
            var newVal = parseFloat(oldValue) + 1;
        } else {
            // Don't allow decrementing below zero
            if (oldValue > 0) {
                var newVal = parseFloat(oldValue) - 1;
            } else {
                newVal = 0;
            }
        }
        $button.parent().find('input').val(newVal);
    });

    $('.pop-up').magnificPopup({
        type: 'iframe'
    });

})(jQuery);