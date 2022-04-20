$(document).ready(function () {



    // editorial menu function - change img on hover
    const listItem = $('.editorial-menu-item');
    var edImgCont = $('#editorial-img-cont');
    var imgChange
    // var change = $('#change');
    // var pauseIcon = $('#pause')
    // var aboutMove = $('#about-move');
    // var logo = $('#logo');

    listItem.mouseover(function () {
        if (this.id == 'editorial-menu-este') {
            $('#editorial-img-cont').html(
                `<img id="change" src="/assets/img/work/editorial/editorial-menu/LBD-Editorial-Menu-Este.jpg"
                alt="L'arte Della Ceramiche" width="100%">`
            );
        } else if (this.id == 'editorial-menu-am') {
            $('#editorial-img-cont').html(
                `<img id="change" src="/assets/img/work/editorial/editorial-menu/LBD-Editorial-Menu-AM.jpg"
                alt="AM" width="100%">`
            );
        } else if (this.id == 'editorial-menu-hyphen') {
            $('#editorial-img-cont').html(
                `<img id="change" src="/assets/img/work/editorial/editorial-menu/LBD-Editorial-Menu-Hyphen.jpg"
                alt="Hyphen Press Catalogue" width="100%">`
            );
        } else if (this.id == 'editorial-menu-drake') {
            $('#editorial-img-cont').html(
                `<img id="change" src="/assets/img/work/editorial/editorial-menu/LBD-Editorial-Menu-Drake.jpg"
                alt="Drake Sales Manual" width="100%">`
            );
        } else if (this.id == 'editorial-menu-ngv') {
            $('#editorial-img-cont').html(
                `<img id="change" src="/assets/img/work/editorial/editorial-menu/LBD-Editorial-Menu-NGV.jpg"
                alt="NGV Catalogue" width="100%">`
            );
        }
        else {
            $('#editorial-img-cont').html(
                `<img id="change" src="/assets/img/work/editorial/editorial-menu/LBD-Editorial-Menu-Este.jpg"
                alt="L'arte Della Ceramiche" width="100%">`
            );
        }
    });

    // pause on hover


});