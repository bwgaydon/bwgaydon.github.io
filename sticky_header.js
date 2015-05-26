$(window).scroll(function () {
    if( $(window).scrollTop() > $('#header').offset().top && !($('#header').hasClass('sticky'))){
    $('#header').addClass('sticky');
    } else if ($(window).scrollTop() == 0){
    $('#header').removeClass('sticky');
    }
});
