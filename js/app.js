/* Preloader and animations */
$(window).load(function () { // makes sure the whole site is loaded
    $('#status').fadeOut(); // will first fade out the loading animation
    $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
    $('body').delay(350).css({'overflow-y': 'visible'});

    if($('.swiper-container').length > 0 )
    {
        var mySwiper = new Swiper ('.section_slide .swiper-container', {
            loop: true,
            pagination: {
                el: '.swiper-pagination',
            },
            autoplay: {
                delay: 5000,
            },
        });

        var mySwiper = new Swiper ('.section_instargram .swiper-container', {
            slidesPerView: 4,
            spaceBetween: 30,

            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            scrollbar: {
                el: '.swiper-scrollbar',
                hide: true,
            }
        })
    }


});


$( ".section_brand .card_menu").click(function() {
    console.log("click");
    $(this).closest('li').find('.popup').addClass("active");
});

$( ".section_brand .popup .close").click(function() {
    $(this).closest('li').find('.popup').removeClass("active");
});

