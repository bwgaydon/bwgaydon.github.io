$(document).ready(function() {
    var width = parseInt($('#sidebar').css("width"));
    $('#sidebar').css("width", width)
    var padding = parseInt($('#sidebar').css("padding"));
    var header = $('#header')[0];
    window.onscroll = function() {
        if(window.scrollY >= $('#header').outerHeight()) {
            $('#sidebar').css("position","fixed");
            $('#sidebar').css("top","2rem");
            $('#sidebar').css("width",width);
            $('#sidebar').css("padding",padding);
        }
        else {
            $('#sidebar').css("position","relative");
            $('#sidebar').css("top","auto");
        }
    };
    
});
