$(document).ready(function () {

    // editorial menu function - change img on hover
    const projectCont = $('.branding-menu-item');
    var imgChange

    projectCont.mouseover(function () {
        if (this.id == 'branding-menu-wilson') {
            imgChange = $("#branding-menu-wilson");
            imgChange.addClass('showme');
        } else if (this.id == 'branding-menu-tdr') {
            imgChange = $("#branding-menu-tdr");
            imgChange.addClass('showme');
        } else if (this.id == 'branding-menu-am') {
            imgChange = $("#branding-menu-am");
            imgChange.addClass('showme');
        } else if (this.id == 'branding-menu-lampedusa') {
            imgChange = $("#branding-menu-lampedusa");
            imgChange.addClass('showme');
        } else if (this.id == 'branding-menu-boozery') {
            imgChange = $("#branding-menu-boozery");
            imgChange.addClass('showme');
        } else if (this.id == 'branding-menu-frosty') {
            imgChange = $("#branding-menu-frosty");
            imgChange.addClass('showme');
        } else {
            this.removeClass('showme');
        }
    });
    projectCont.mouseleave(function () {
        if (this.id == 'branding-menu-wilson') {
            imgChange = $("#branding-menu-wilson");
            imgChange.removeClass('showme');
        } else if (this.id == 'branding-menu-tdr') {
            imgChange = $("#branding-menu-tdr");
            imgChange.removeClass('showme');
        } else if (this.id == 'branding-menu-am') {
            imgChange = $("#branding-menu-am");
            imgChange.removeClass('showme');
        } else if (this.id == 'branding-menu-lampedusa') {
            imgChange = $("#branding-menu-lampedusa");
            imgChange.removeClass('showme');
        } else if (this.id == 'branding-menu-boozery') {
            imgChange = $("#branding-menu-boozery");
            imgChange.removeClass('showme');
        } else if (this.id == 'branding-menu-frosty') {
            imgChange = $("#branding-menu-frosty");
            imgChange.removeClass('showme');
        } else {
            this.removeClass('showme');
        }
    });

    // pause on hover


});