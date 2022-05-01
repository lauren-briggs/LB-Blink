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
            "display": "none",
        });

        console.log(clickedId);
        displayEl.css({
            "background-image": `url(/assets/img/work/sites/LBD-Websites-${clickedId}.jpg)`,
            "background-size": "cover",
            "background-position": "center",
        });

        console.log(displayEl[0].attributes);
        $('#website-role').addClass('showme');
        let designRole = $('#role-design');
        let devRole = $('#role-development');


        designRole.removeClass('showme');
        devRole.removeClass('showme');

        if (clickedId == 'am') {
            displayEl.attr("href", "https://arcticmirage.com.au/");
            designRole.addClass('showme');
            devRole.addClass('showme');
        } else if (clickedId == 'hg') {
            displayEl.attr("href", "https://www.huntergrace.com.au/");
            designRole.addClass('showme');
        } else if (clickedId == 'drake') {
            displayEl.attr("href", "https://www.drakebrighton.com.au/");
            designRole.addClass('showme');
        } else if (clickedId == 'quiz') {
            displayEl.attr("href", "https://lauren-briggs.github.io/code-quiz/");
            devRole.addClass('showme');
        } else if (clickedId == 'weather') {
            displayEl.attr("href", "https://lauren-briggs.github.io/weather-dashboard/");
            devRole.addClass('showme');
        }
    })

});