$(document).ready(function () {

    // transform text into circle
    var circleText = $(".circle-text");
    var text = circleText.text();
    var letterArr = [];

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

        // console.log(letterArr)

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
            })
        });
    }

    makeCircleText(circleText, 150);

    // rotate text on scroll
    $(window).scroll(function () {
        var w = circleText.width();
        $('.circle-text').css({
            transform: `rotate(${window.pageYOffset / 2}deg)`,
            transformOrigin: `center center`,
        });
    });

    // disappear 'scroll' text on scroll
    const scrollText = $('#scroll')
    $(window).scroll(function () {
        if ($(window).scrollTop() == 0) {
            scrollText.css({
                opacity: '1',
                transition: '0.5s ease',
            })
        } else {
            scrollText.css({
                opacity: '0',
                transition: '0.5s ease',
            })
        }
    })

    // pause button functionality
    var pauseBtn = $('#pause-container')
    var pauseIcon = $('#pause')
    var aboutMove = $('#about-move');
    var logo = $('#logo');

    pauseBtn.click(function () {
        if (this.value == 'pause') {
            aboutMove.css({
                animationPlayState: 'paused',
            });
            logo.attr('src', 'assets/img/LBD-10.jpg');
            this.value = 'play';
            pauseIcon.addClass('showme');
            console.log(`button value is now: ${this.value}`)
        } else {
            aboutMove.css({
                animationPlayState: '',
            });
            logo.attr('src', 'assets/img/LBD-Gif-1A-02.gif');
            pauseIcon.removeClass('showme');
            this.value = 'pause';
            console.log(`button value is now: ${this.value}`)
        }
    });

    // show cv and cover letter on click

    var cvIcon = $('#CV-cont');
    var coverLetterIcon = $('#cover-cont');
    var cvCont = $('#cv-close-cont');
    var coverLetterCont = $('#cover-letter-cont');

    cvIcon.click(function () {
        cvCont.addClass('showme');
    })
    coverLetterIcon.click(function () {
        coverLetterCont.addClass('showme');
    })

    // close
    var closeBtn = $('.close');

    closeBtn.click(function () {
        var parent = $(this).parent(0)[0];
        if (parent.id == 'cv-close-cont') {
            cvCont.removeClass('showme');
        } else if (parent.id == 'cover-letter-cont') {
            coverLetterCont.removeClass('showme');
        }
    })

});