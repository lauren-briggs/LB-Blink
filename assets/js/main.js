$(document).ready(function () {

    // transform text into circle
    const circleText = $(".circle-text");
    const text = circleText.text();
    const letterArr = [];

    function makeCircleText(circleText, radius) {
        circleText.css("min-width", "initial");
        circleText.css("min-height", "initial");
        var w = circleText.width(),
            h = circleText.height();
        circleText.css("min-width", w + "px");
        circleText.css("min-height", h + "px");

        Array.from(text).forEach(function (letter) {
            letterArr.push(`<span>${letter}</span>`);
        });
        circleText.html(letterArr);

        var letters = circleText.find("span");
        letters.css({
            position: "absolute",
            height: `${radius}px`,
            transformOrigin: "center"
        });
        var angleRad = w / radius;
        var angle = 3 * angleRad * 365 / Math.PI / text.length;

        letters.each(function (i, el) {
            $(el).css({
                transform: `translate(${w / 2 - 3}px,0px) rotate(${i * angle - text.length * angle / 3.5}deg)`,
                transformOrigin: "center"
            })
        });
    }

    makeCircleText(circleText, 150);

    // rotate text on scroll
    // $(window).load(function () {
    //     var w = circleText.width();
    //     $('.circle-text').css({
    //         transform: `rotate(2deg)`,
    //         transformOrigin: `center center`,
    //     });
    // });

    // pause button functionality
    const pauseBtn = $('#pause-container')
    const pauseIcon = $('#pause')
    const aboutMove = $('#about-move');
    const logo = $('#logo');

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

    // replace logo with home on hover
    const logoHomeEl = $('#logo-home-btn');
    const homeBtnNew = $('#home-btn');

    logoHomeEl.mouseover(function () {
        logo.addClass('hideme');
        homeBtnNew.addClass('showme');
    })
    logoHomeEl.mouseleave(function () {
        logo.removeClass('hideme');
        homeBtnNew.removeClass('showme');
    })


    // show cv and cover letter on click
    // var cvIcon = $('#CV-cont');
    // var coverLetterIcon = $('#cover-cont');
    // var cvCont = $('#cv-close-cont');
    // var coverLetterCont = $('#cover-letter-cont');

    // cvIcon.click(function () {
    //     cvCont.addClass('showme');
    // })
    // coverLetterIcon.click(function () {
    //     coverLetterCont.addClass('showme');
    // })

    // close
    // var closeBtn = $('.close');

    // closeBtn.click(function () {
    //     var parent = $(this).parent(0)[0];
    //     if (parent.id == 'cv-close-cont') {
    //         cvCont.removeClass('showme');
    //     } else if (parent.id == 'cover-letter-cont') {
    //         coverLetterCont.removeClass('showme');
    //     }
    // })

    // menu on mobile
    const menuBtn = $('#menu-mobile');
    const menuMobile = $('#nav-cont-mobile');

    menuBtn.click(function () {
        if (menuBtn.hasClass('active') == true) {
            menuMobile.removeClass('showme');
            menuBtn.removeClass('active');
        } else {
            menuBtn.addClass('active');
            menuMobile.addClass('showme');
        }
    });

    $(window).on("resize", (function () {
        if ($(window).width() > 768) {
            menuMobile.removeClass('showme');
            menuBtn.removeClass('active');
        }
        else {
        }
    }))

    const homeBtn = $("#home-nav");
    const homeBtnMobile = $("#home-nav-mobile");
    const editorialBtn = $("#editorial-nav");

    $(window).on("load", (function () {
        if (document.location.pathname.indexOf("/index.html") === 0) {
            homeBtn.css({ 'display': 'none', });
            homeBtnMobile.css({ 'display': 'none', });
            editorialBtn.css({ 'border-left': 'solid 1px black' });
        }
    }));


});