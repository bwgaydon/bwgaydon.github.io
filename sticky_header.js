$(window).scroll(function () {
    if( $(window).scrollTop() > $('#header-2').offset().top && !($('#header-2').hasClass('sticky'))){
    $('#header-2').addClass('sticky');
    } else if ($(window).scrollTop() == 0){
    $('#header-2').removeClass('sticky');
    }
});
