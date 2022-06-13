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

    // replace cursor with project name on menu hover
    $('#branding-menu-wilson').mousemove(replaceCursor);
    $('#branding-menu-am').mousemove(replaceCursor);
    $('#branding-menu-lampedusa').mousemove(replaceCursor);
    $('#branding-menu-boozery').mousemove(replaceCursor);
    $('#branding-menu-tdr').mousemove(replaceCursor);
    $('#branding-menu-frosty').mousemove(replaceCursor);

    function replaceCursor(event) {
        let thisId = this.id.split('-', 3)[2];
        let hoveredEl
        let hoverCursorEl
        if (thisId === 'back') {
            console.log('back');
        } else {
            let checkProjectIsOpen = $(`#branding-menu-${thisId}`).hasClass('open');
            // console.log(checkProjectIsOpen)
            if (checkProjectIsOpen === true) {
                // console.log('Project is open');
                hoveredEl = this.id.split('-', 3)[2]
                hoverCursorEl = $(`#hover-cursor-${hoveredEl}`);
                hoverCursorEl.css({
                    'display': 'none',
                });
            } else if (checkProjectIsOpen === false) {
                // console.log('Project closed');
                // console.log(`x = ${event.clientX}`);
                // console.log(`y = ${event.clientY}`);
                // console.log([event]);
                // console.log([event][0].currentTarget.offsetLeft);
                // console.log([event][0].currentTarget.offsetTop);
                let resetLeft = [event][0].currentTarget.offsetLeft;
                let resetTop = [event][0].currentTarget.offsetTop;
                hoveredEl = this.id.split('-', 3)[2]
                // console.log(hoveredEl);
                hoverCursorEl = $(`#hover-cursor-${hoveredEl}`);
                hoverCursorEl.css({
                    'top': `${event.clientY - resetTop - 60 + "px"}`,
                    'left': `${event.clientX - resetLeft + "px"}`,
                });
            }
        }
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
                speed: 2000,
            });
        });
    }


    const backBtn = $('#branding-menu-back');

    projectCont.click(function () {
        // get id of clicked div
        let clickedId = this.id.split('-', 3)[2]
        // show selected project
        $(`#branding-${clickedId}`).addClass('showme');
        $(`#branding-menu-${clickedId}`).removeClass('showme');
        $(`#branding-menu-${clickedId}`).addClass('open');

        // if button clicked was back reload page
        if (clickedId === 'back') {
            location.reload();
        } else {
            // get id of each menu item
            $(`#branding-menu-${clickedId}`).siblings().each(function () {
                let activeMenuItem = $(`#branding-menu-${clickedId}`)[0].id.split('-', 3)[2];
                let activeProject = $(`#branding-${clickedId}`)[0].id.split('-')[1];
                let i = this.id.split('-');
                let iId = i[i.length - 1];
                if (iId == 'back') {
                    // if id = back, skip
                    console.log('skip back');
                } else if (iId == activeProject || iId == activeMenuItem) {
                    // if the id matches the active/displayed project, skip
                    console.log('skip project and menu');
                } else {
                    // if the id doesn't match, hide div
                    // console.log('not a match');
                    // console.log(this.id);
                    $(`#${this.id}`).css({
                        'display': 'none',
                    });
                }
            });

            // if window is larger than 1000px
            if ($(window).width() > 1000) {
                $(`#branding-menu-${clickedId}`).css({
                    // bring title square to first position
                    'grid-column-start': '1',
                    'grid-column-end': 'span 1',
                    'grid-row-start': '1',
                    'grid-row-end': 'span 1',
                });
                // display back button
                backBtn.addClass('showme');
                // initialise swiper
                initSwiper();
            } else if ($(window).width() < 1000 && $(window).width() > 576) {
                // if window is between 1000px and 576px
                // redefine grid
                $('#branding-menu-cont').css({
                    'grid-template-columns': '1fr 1fr',
                    'grid-template-rows': '3fr 1fr',
                });
                // 
                $(`#branding-menu-${clickedId}`).css({
                    'grid-column-start': '1',
                    'grid-column-end': 'span 1',
                    'grid-row-start': '2',
                    'grid-row-end': 'span 1',
                    // 'background-color': 'black',
                    // 'color': 'white',
                });
                $(`#branding-${clickedId}`).css({
                    'grid-column-start': '1',
                    'grid-column-end': 'span 2',
                    'grid-row-start': '1',
                    'grid-row-end': 'span 1',
                });
                // display back button
                backBtn.addClass('showme');
                backBtn.css({
                    'grid-column-start': '2',
                    'grid-column-end': 'span 1',
                    'grid-row-start': '2',
                    'grid-row-end': 'span 1',
                });
                // initialise swiper
                initSwiper();
            } else if ($(window).width() < 576) {
                // if window is less than 576px
                // redefine grid
                $('#branding-menu-cont').css({
                    'grid-template-columns': '1fr',
                    'grid-template-rows': '4fr 1fr 1fr',
                });
                // 
                $(`#branding-menu-${clickedId}`).css({
                    'grid-column-start': '1',
                    'grid-column-end': 'span 1',
                    'grid-row-start': '2',
                    'grid-row-end': 'span 1',
                });
                $(`#branding-${clickedId}`).css({
                    'grid-column-start': '1',
                    'grid-column-end': 'span 1',
                    'grid-row-start': '1',
                    'grid-row-end': 'span 1',
                });
                // display back button
                backBtn.addClass('showme');
                backBtn.css({
                    'grid-column-start': '1',
                    'grid-column-end': 'span 1',
                    'grid-row-start': '3',
                    'grid-row-end': 'span 1',
                });
                // initialise swiper
                initSwiper();
            }
        }

    });
});