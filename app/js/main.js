$(document).ready(function() {
    
    var nav = $('.nav');  
    $(document).on('click', '.hide-nav', function() {
        $('.hide-nav').toggleClass('active');
        if(nav.is(':not(:visible)'))
            nav.slideDown();
        else 
            nav.slideUp();
    });
});