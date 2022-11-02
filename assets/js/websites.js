$(document).ready(function () {

    const menuItem = $('.websites-menu-item');
    const displayEl = $('#website-display');
    const initialText = $('#initial-text');

    menuItem.click(function () {
        menuItem.siblings().each(function () {
            let toRemove = $(`#${this.id}`);
            toRemove.removeClass('active');
        });
        let clickedId = this.id.split('-', 3)[2];
        $(`#${this.id}`).addClass('active');
        initialText.css({
            "opacity": "0",
            "transition": "ease",
        })
        console.log(clickedId);
        displayEl.css({
            "background-image": `url(/assets/img/work/sites/LBD-Websites-${clickedId}.jpg)`,
            "background-size": "cover",
            "background-position": "center",
        });

        console.log(displayEl);
        console.log(displayEl[0].attributes);

        let infoArr = ['am', 'hunter', 'drake', 'code', 'weather'];
        console.log(infoArr);
        infoArr.forEach(function (i) {
            let closeInfoId = $(`#${i}-info`);
            closeInfoId.removeClass('showme');
        });

        console.log(clickedId);
        let infoId = $(`#${clickedId}-info`);
        infoId.addClass('showme');

        if (clickedId == 'am') {
            displayEl.attr("href", "https://arcticmirage.com.au/");
        } else if (clickedId == 'hg') {
            displayEl.attr("href", "https://www.huntergrace.com.au/");
        } else if (clickedId == 'drake') {
            displayEl.attr("href", "https://www.drakebrighton.com.au/");
        } else if (clickedId == 'quiz') {
            displayEl.attr("href", "https://lauren-briggs.github.io/code-quiz/");
        } else if (clickedId == 'weather') {
            displayEl.attr("href", "https://lauren-briggs.github.io/weather-dashboard/");
        }
    })
});