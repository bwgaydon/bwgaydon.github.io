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
    div.style.top = document.body.scrollTop + 'px';
    console.log(div.style.top);
}


//window.onscroll = function () {
$(window).scroll(function () {
    var header = headers[0];    //implement multiple headers after 1 works
    if($(window).scrollTop() > header.offsetTop) {
        stick(header);
        //window.setTimeout(function() {stick(header)}, 16);
    }
    
});


