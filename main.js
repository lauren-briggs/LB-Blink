$(document).ready(function () {

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

        console.log(letterArr)

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
                transform: `translate(${w / 2 - 3}px,0px) rotate(${i * angle - text.length * angle / 4}deg)`,
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



});