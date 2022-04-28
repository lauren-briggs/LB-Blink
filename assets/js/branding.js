$(document).ready(function () {

    // editorial menu function - change img on hover
    const projectCont = $('.branding-menu-item');

    projectCont.mouseover(function () {
        let thisId = this.id.split('-', 3)[2];
        if (thisId === 'back') {
            console.log('back');
        } else {
            let checkProjectIsOpen = $(`#branding-${thisId}`).hasClass('showme');
            if (checkProjectIsOpen === true) {
                console.log('Project is open');
            } else {
                $(`#branding-menu-${thisId}`).addClass('showme');
            }
        }
    });
    projectCont.mouseleave(function () {
        let thisId = this.id.split('-', 3)[2];
        if (thisId == 'back') {
            console.log('back')
        } else {
            $(`#branding-menu-${thisId}`).removeClass('showme');
        }
    });

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
                // updateOnWindowResize: false,
                // autoHeight: true,
                grabCursor: true,
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

    initSwiper();

    const backBtn = $('#branding-menu-back');

    projectCont.click(function () {
        let clickedId = this.id.split('-', 3)[2]


        $(`#branding-${clickedId}`).addClass('showme');
        $(`#branding-menu-${clickedId}`).removeClass('showme');
        if (clickedId === 'back') {
            console.log('ignore');
        } else {
            $(`#branding-menu-${clickedId}`).css({
                'grid-column-start': '1',
                'grid-column-end': 'span 1',
                'grid-row-start': '1',
                'grid-row-end': 'span 1',
            });
            backBtn.addClass('showme');
        }

    });

    backBtn.click(function () {
        location.reload();
    })

});