$(document).ready(function () {

    // underline
    var underline = $('#editorial-menu-este');

    underline.css('text-decoration', 'underline');
    underline.css('text-underline-offset', '1px');


    // swiper
    const swiper = new Swiper('.swiper', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },
        on: {
            init: function () {
                console.log('swiper initialized');
            },
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        // enabled: false,
        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        speed: 2000,
    });
    swiper.slideNext();
});