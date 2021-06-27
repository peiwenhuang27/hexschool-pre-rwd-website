$(document).ready(function () {
    // mobile mode: hamburger dropdown menu
    $('#hamburger-menu').click(function (e) { 
        e.preventDefault();
        $(this).siblings().slideToggle();
    });
    
    // Welcome page: navbar buttons
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

    // footer logo: scroll to top
    $('.back-top').click(function (e) {
        // e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, 300);
    });
});