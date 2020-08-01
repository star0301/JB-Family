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
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            autoplay: {
                delay: 2300,
            },
        });

        var mySwiper = new Swiper ('.section_instargram .swiper-container', {
            slidesPerView: 2,
            spaceBetween: 30,

            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
            },
            scrollbar: {
                el: '.swiper-scrollbar',
                hide: true
            },
            breakpoints: {
                1000: {
                    slidesPerView: 1,
                    spaceBetween: 10
                }
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

$( ".menu-trigger.mobile_gnb").click(function() {
    $(this).toggleClass("active");
    $(".gnb").toggleClass("active");
});

