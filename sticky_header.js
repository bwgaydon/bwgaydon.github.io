var headers = document.getElementsByClassName('header');
//body.style.zIndex = 1;
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
    var top = div.style.top;
    console.log(top);
    top -= 'px'
    top += ($(window).scrollTop() - div.offsetTop)
    top += 'px';
    div.style.top = top;
    console.log(top);
}


window.onscroll = function () {
    var header = headers[0];    //implement multiple headers after 1 works
    if($(window).scrollTop() > header.offsetTop) {
        stick(header);
        //window.setTimeout(function() {stick(header)}, 16);
    }
    
};


