function main() {
    headers = document.getElementsByClassName('header');
    original_positions = [];
    for(i=0;i<headers.length;i++) {
        original_positions[i] = headers[i].offsetTop;
    }
    //body.style.zIndex = 1;
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
}


window.onscroll = function () {
    var header = headers[0];    //implement multiple headers after 1 works
    var orig = original_positions[0];
    if(document.body.scrollTop > header.offsetTop && document.body.scrollTop > orig) {
        stick(header);
    }
};

window.onload = main();

