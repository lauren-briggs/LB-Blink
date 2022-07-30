$(document).ready(function () {

    const pauseBtn = $('#icon-pause')
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
        if (this.name == 'pause-outline') {
            aboutMove.css({
                animationPlayState: 'paused',
            });
            logo.attr('src', 'assets/img/LBD-10.jpg');
            this.name = 'play-sharp';
            console.log(`animation paused`);
            console.log(`icon value: ${this.name}`);
        } else {
            aboutMove.css({
                animationPlayState: '',
            });
            logo.attr('src', 'assets/img/LBD-Gif-1A-02.gif');
            this.name = 'pause-outline';
            console.log(`animation playing`);
            console.log(`icon-value: ${this.name}`);
        }
    });

    const desMenuLI = $('.des-menu-li');
    const projectList = $('#project-list');

    desMenuLI.click(function () {
        // reset list its to 100% opacity
        projectList.children('li').children().css({ "opacity": "100%" });
        desMenuLI.css({
            "opacity": "100%",
        });
        desMenuLI.removeClass('selected');
        // get name of clicked el
        // check which nav item was selected and reduce opacity of other items
        const selectedNavItem = this.id.split('-')[0];
        $(this).addClass('selected')
        desMenuLI.each(function () {
            const checkClass = this.id.split('-')[0];
            if (checkClass === selectedNavItem) {
                console.log(`Match: ${selectedNavItem} = ${this.id}`);

            } else {
                const notChosen = $(`#${this.id}`);
                console.log(`Not a match: ${selectedNavItem} - ${notChosen[0].id}`);
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