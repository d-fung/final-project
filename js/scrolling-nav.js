//jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

//jQuery for page scrolling feature - requires jQuery Easing plugin

$(function() {
    $('a.page-scroll').on('click', function(event) {
        var fromTop = 106;
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - fromTop 
        }, 900, 'easeInOutExpo');
        event.preventDefault();
    });
});

// $(document).ready(function() {

//     var offsetHeight = 51;

//     $('body').scrollspy({
//         offset: offsetHeight
//     });

//     $('.navbar li a').click(function (event) {
//         var scrollPos = $('body > .container').find($(this).attr('href')).offset().top - (offsetHeight - 1);
//         $('body,html').animate({
//             scrollTop: scrollPos
//         }, 500, function () {
//             $(".btn-navbar").click();
//         });
//         return false;
//     });

// });


