function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {
            lat: 40.0076,
            lng: -105.26594
        },
        zoom: 12
    });
}

$(document).ready(function() {
    var map;
	initMap();
});
