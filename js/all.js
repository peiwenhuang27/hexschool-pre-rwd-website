$(document).ready(function () {
    $('#feat-button').click(function (e) { 
        e.preventDefault();
        $('html').animate({
            scrollTop: $("#section-feat").offset().top
        }, 500);
    });
    $('#chef-button').click(function (e) { 
        e.preventDefault();
        $('html').animate({
            scrollTop: $("#chef").offset().top
        }, 500);
    });
    $('#map-button').click(function (e) { 
        e.preventDefault();
        $('html').animate({
            scrollTop: $("#map").offset().top
        }, 500);
    });
});