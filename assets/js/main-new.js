$(document).ready(function () {

    const pauseBtn = $('#icon-pause');
    const aboutMove = $('#about-move');
    const logo = $('#logo');
    const iconBlackBtn = $('#icon-black');
    const iconWhiteBtn = $('#icon-white');
    const imgPreviewCont = $('.img-preview');

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

    // 
    const desMenuLI = $('.des-menu-li');
    const projectList = $('#project-list');

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
        }

    })

    // change bg img on hover of project name
    projectList.children('li').children().mouseenter(function () {
        const hoveredProjectId = this.id;
        console.log(hoveredProjectId);
        if (hoveredProjectId === "code" || hoveredProjectId === "hg" || hoveredProjectId === "weather") {
            console.log("yes");
            $(`#img-preview-${hoveredProjectId}`).addClass('showme');
        } else {
            $('body').css({
                "background-image": `url('/lbd/assets/img/work/bg-prev/LBD-${hoveredProjectId}.jpg')`,
                "background-position": "center",
                "background-repeat": "no-repeat",
                "background-size": "cover",
                "transition": "ease 0.75s",
            })
        }
    })
    projectList.children('li').mouseleave(function () {
        imgPreviewCont.removeClass('showme');
        $(`#img-preview-code`).removeClass('showme');
        $(`#img-preview-hg`).removeClass('showme');
        $(`#img-preview-weather`).removeClass('showme');
        $('body').css({
            "background-image": "none",
            "transition": "ease 0.75s",
        })
    })
});