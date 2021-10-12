jQuery(document).ready(function () {
    $('.footer-navbar-dark').scrollToFixed({
        bottom: 0,
        limit: $('.footer-navbar-dark').offset().top,    
        // marginBottom: $('.footer').outerHeight() + 0,
    });
});