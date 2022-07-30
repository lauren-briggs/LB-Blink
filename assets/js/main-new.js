$(document).ready(function () {

    const pauseBtn = $('#pause-container')
    const pauseIcon = $('#pause')
    const aboutMove = $('#about-move');
    const logo = $('#logo');
    const iconBlackBtn = $('#icon-black');
    const iconWhiteBtn = $('#icon-white');

    iconBlackBtn.click(function () {
        $('body').css({
            "background-color": "black",
            "color": "white",
        });
        this.name = "radio-button-off-sharp";
        iconWhiteBtn[0].name = "radio-button-on-sharp";
    })

    iconWhiteBtn.click(function () {
        $('body').css({
            "background-color": "white",
            "color": "black",
        });
        this.name = "radio-button-off-sharp";
        iconBlackBtn[0].name = "radio-button-on-sharp";
    })

    pauseBtn.click(function () {
        if (this.value == 'pause') {
            aboutMove.css({
                animationPlayState: 'paused',
            });
            circleText.css({
                animationPlayState: 'paused',
            });
            logo.attr('src', 'assets/img/LBD-10.jpg');
            this.value = 'play';
            pauseIcon.addClass('showme');
            console.log(`animation paused`);
            console.log(`button value: ${this.value}`);
        } else {
            aboutMove.css({
                animationPlayState: '',
            });
            circleText.css({
                animationPlayState: '',
            });
            logo.attr('src', 'assets/img/LBD-Gif-1A-02.gif');
            pauseIcon.removeClass('showme');
            this.value = 'pause';
            console.log(`animation playing`);
            console.log(`button value: ${this.value}`);
        }
    });

    const desMenuLI = $('.des-menu-li');
    const projectList = $('#project-list');

    desMenuLI.click(function () {
        // reset list its to 100% opacity
        projectList.children('li').children().css({ "opacity": "100%" });
        desMenuLI.css({ "opacity": "100%" });
        // get name of clicked el
        // check which nav item was selected and reduce opacity of other items
        const selectedNavItem = this.id.split('-')[0];
        desMenuLI.each(function () {
            const checkClass = this.id.split('-')[0];
            if (checkClass === selectedNavItem) {
                console.log(`Yes - ${this.id}`)
            } else {
                const notChosen = $(`#${this.id}`);
                console.log(`No - ${notChosen}`);
                notChosen.css({ "opacity": "25%" })
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
    })

});