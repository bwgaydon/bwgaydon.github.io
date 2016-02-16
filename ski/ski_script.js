function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {
            lat: 40.03,
            lng: -105.25
        },
        zoom: 8
    });
}

$(document).ready(function() {
    var map;
	initMap();
});
