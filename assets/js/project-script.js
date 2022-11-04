$(document).ready(function () {

    const pauseBtn = $('#icon-pause');
    const aboutMove = $('#about-move');
    const logo = $('#logo');
    const iconBlackBtn = $('#icon-black');
    const iconWhiteBtn = $('#icon-white');
    const desMenuLI = $('.des-menu-li');
    const projectList = $('#project-list');
    const projectListLinks = projectList.children('li').children('h2').children('a');

    // toggle radio btn
    iconBlackBtn.click(function () {
        $('body').css({
            "background-color": "black",
            "color": "white",
        });
        logo.css({
            "filter": "invert(100%)",
        })
        this.name = "radio-button-off-sharp";
        iconWhiteBtn[0].name = "radio-button-on-sharp";
        projectListLinks.css({ "color": "white" });
    })
    iconWhiteBtn.click(function () {
        $('body').css({
            "background-color": "white",
            "color": "black",
        });
        logo.css({
            "filter": "invert(0%)",
        })
        this.name = "radio-button-off-sharp";
        iconBlackBtn[0].name = "radio-button-on-sharp";
        projectListLinks.css({ "color": "black" });
    })

    // play/pause animation functionality
    pauseBtn.click(function () {
        if (this.name == 'pause-outline') {
            aboutMove.css({
                animationPlayState: 'paused',
            });
            logo.attr('src', '/lbd/assets/img/LBD-10.jpg');
            this.name = 'play-sharp';
            console.log(`animation paused`);
            console.log(`icon value: ${this.name}`);
        } else {
            aboutMove.css({
                animationPlayState: '',
            });
            logo.attr('src', '/lbd/assets/img/LBD-Gif-1A-02.gif');
            this.name = 'pause-outline';
            console.log(`animation playing`);
            console.log(`icon-value: ${this.name}`);
        }
    });

    desMenuLI.click(function () {
        console.log(this)
        let checkSelected = $(`#${this.id}`);
        if (checkSelected.hasClass('selected')) {
            desMenuLI.css({
                "opacity": "100%",
            });
            projectList.children('li').children().css({ "opacity": "100%" });
            checkSelected.removeClass('selected');
        } else {
            // reset list its to 100% opacity
            projectList.children('li').children().css({ "opacity": "100%" });
            desMenuLI.css({
                "opacity": "100%",
            });
            desMenuLI.removeClass('selected');
            // get name of clicked el
            const selectedNavItem = this.id.split('-')[0];
            $(this).addClass('selected')
            // check which nav item was selected and reduce opacity of other items
            desMenuLI.each(function () {
                const checkClass = this.id.split('-')[0];
                if (checkClass === selectedNavItem) {
                    console.log(`Match: ${selectedNavItem} = ${this.id}`);
                } else {
                    const notChosen = $(`#${this.id}`);
                    console.log(`Not a match: ${selectedNavItem} - ${notChosen[0].id}`);
                    notChosen.css({ "opacity": "75%" })
                }
            })
            // check if each list item has class that matches name of clicked el and reduce opacity if not
            const projectListLi = projectList.children('li').children();
            projectListLi.each(function () {
                const elToCheck = $(`#${this.id}`);
                if (elToCheck.hasClass(selectedNavItem)) {
                    console.log('yes')
                } else {
                    const notChosen = $(`#${this.id}`);
                    notChosen.css({ "opacity": "25%" })
                }
            })
        }

    })

    function initSwiper() {
        $(".swiper-container").each(function (index) {
            $(this).addClass("instance-" + index);
            let swiper = new Swiper(".instance-" + index, {
                autoplay: {
                    delay: 2500,
                    disableOnInteraction: false,
                },
                // breakpoints: {
                //     1000: {
                //         direction: 'horizontal',
                //     }
                // },
                direction: 'vertical',
                effect: 'slide',
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
                    dynamicBullets: false,
                },
                navigation: {
                    nextEl: ".swiper-button-next-two",
                    prevEl: ".swiper-button-prev-two",
                },
                preloadImages: false,
                lazy: true,
                speed: 1000,
            });

            swiper.slideNext(1500, true)
            swiper.slidePrev(1500, true)
        });
    };

    // setTimeout(initSwiper, 3000)

    initSwiper();


});