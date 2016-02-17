
function initMap() {
	var myLatLng = new google.maps.LatLng(39.5309506,-106.1812467);
	var mapOptions = {
		zoom: 11,
		center: myLatLng,
		mapTypeId: google.maps.MapTypeId.HYBRID
	};
	
	var map = new google.maps.Map(document.getElementById("map"),mapOptions);
	//markers: https://developers.google.com/maps/documentation/javascript/markers
    var marker = new google.maps.Marker({
	    position: myLatLng,
	    map: map,
	    title: 'Hello World!'
	});
}


$(document).ready(function() {
	initMap();
});
