$(document).ready(function () {

    // editorial menu function - change img on hover
    const listItem = $('.editorial-menu-item');

    function showProject() {
        // Getting the id value of the target el
        let i = $(this).attr("id");
        $(this).siblings().css('text-decoration', 'none');
        $(this).css('text-decoration', 'underline');
        let projectName = i.split('-', 3)[2];

        $('.swiper').siblings().each(function () {
            $(this).removeClass('showme');
        })

        // creating a variable that holds the class name using i value and changing display to flex
        $(`#swiper-${projectName}`).addClass('showme')
        // $('.swiper-pagination').addClass('showme')

        // swiper.slideNext();
    }

    function initSwiper() {
        $(".swiper-container").each(function (index) {
            $(this).addClass("instance-" + index);
            let swiper = new Swiper(".instance-" + index, {
                autoplay: {
                    delay: 2000,
                    disableOnInteraction: false,
                },
                direction: 'horizontal',
                effect: "fade",
                enabled: true,
                initialSlide: 0,
                loop: true,
                on: {
                    init: function () {
                        console.log('swiper initialized');
                    },
                },
                pagination: {
                    el: '.swiper-pagination',
                    clickable: 'true',
                    dynamicBullets: true,
                },
                preloadImages: false,
                lazy: true,
                speed: 2500,
            });

        });
    }

    // swiper
    // const swiper = new Swiper('.swiper', {
    //     // Optional parameters
    //     direction: 'horizontal',
    //     loop: true,
    //     autoplay: {
    //         delay: 2000,
    //         disableOnInteraction: false,
    //     },
    //     initialSlide: 0,
    //     effect: 'fade',
    //     on: {
    //         init: function () {
    //             console.log('swiper initialized');
    //         },
    //     },
    //     pagination: {
    //         el: '.swiper-pagination',
    //         clickable: true,
    //     },
    //     preloadImages: false,
    //     // Enable lazy loading
    //     lazy: true,
    //     // enabled: false,
    //     // Navigation arrows
    //     navigation: {
    //         nextEl: '.swiper-button-next',
    //         prevEl: '.swiper-button-prev',
    //     },
    //     speed: 2000,
    // });

    listItem.click(showProject);
    listItem.click(initSwiper);

});