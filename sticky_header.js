var headers = document.getElementsByClassName('header');
for(i=0;i<headers.length;i++) {
    headers[i].style.zIndex = i+100;
}
/*
$(window).scroll(function () {
    var header = headers[0];
    if( $(window).scrollTop() > $(header).offset().top && !($(header).hasClass('sticky'))) {
        $(header).addClass('sticky');
    }
    else if ($(window).scrollTop() == 0){
        $(header).removeClass('sticky');
    }
});
*/

function stick(div) {
    var left = div.offsetLeft;
    $(div).css({
        "position":"absolute",
        "top":0,
        "left":left
    })
}

//window.onscroll = function () {
$(window).scroll(function () {
    
    var header = headers[0];    //implement multiple headers after 1 works
    
    if($(window).scrollTop() >= $(header).offset().top) {
        $(header).style.position = 'absolute';
        $(header).stick();
        window.setTimeout(function() {stick(header)}, 16);
    }
    
});
