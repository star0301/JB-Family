/* Preloader and animations */
$(window).load(function () { // makes sure the whole site is loaded
    $('#status').fadeOut(); // will first fade out the loading animation
    $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
    $('body').delay(350).css({'overflow-y': 'visible'});


    var mySwiper = new Swiper ('.section_slide .swiper-container', {
        loop: true,
        pagination: {
            el: '.swiper-pagination',
        }
    })

});

