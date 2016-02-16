
function initMap() {
	var myLatlng = new google.maps.LatLng(40.0076, -105.26594);
	var mapOptions = {
		zoom: 8,
		center: myLatlng,
		mapTypeId: google.maps.MapTypeId.SATELLITE
	};
	
	var map = new google.maps.Map(document.getElementById("map"),mapOptions);
	//markers: https://developers.google.com/maps/documentation/javascript/markers
    
}


$(document).ready(function() {
	initMap();
});
