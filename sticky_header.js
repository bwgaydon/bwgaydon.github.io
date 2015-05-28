function main() {
    var headers = document.getElementsByClassName('header');
    var original_positions = [];
    for(i=0;i<headers.length;i++) {
        original_positions[i] = headers[i].offsetTop;
        console.log(original_positions[i]);
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
    if($(window).scrollTop() > header.offsetTop) {
        stick(header);
    }
};

$(document).ready(function() {
    main();
});

