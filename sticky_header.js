var headers = document.getElementsByClassName('header');
for(i=0;i<headers.length;i++) {
    headers[i].style.zIndex = i;
}
/*
$(window).scroll(function () {
    if( $(window).scrollTop() > $('#header').offset().top && !($('#header').hasClass('sticky'))) {
        $('#header').addClass('sticky');
    }
    else if ($(window).scrollTop() == 0){
        $('#header').removeClass('sticky');
    }
});
*/

$(window).scroll(function () {
    var header = headers[0];
    if( $(window).scrollTop() > $(header).offset().top && !($(header).hasClass('sticky'))) {
        $(header).addClass('sticky');
    }
    else if ($(window).scrollTop() == 0){
        $(header).removeClass('sticky');
    }
});

/*
var i=0;
$(window).scroll(function () {
    //headers[i] is the header we're watching, headers[i-1] is header already stuck to top
    while(i<headers.length) {
        if( $(window).scrollTop() >= headers[i].offset().top) {
            if(i!=0 && headers[i-1].hasClass('sticky')) headers[i-1].removeClass('sticky');
            headers[i].addClass('sticky');
            i++;
        }
    }
});
*/
