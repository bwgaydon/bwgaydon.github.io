
function initMap() {
	var myLatlng = new google.maps.LatLng(39.5309506,-106.1812467);
	var mapOptions = {
		zoom: 11,
		center: myLatlng,
		mapTypeId: google.maps.MapTypeId.HYBRID
	};
	
	var map = new google.maps.Map(document.getElementById("map"),mapOptions);
	//markers: https://developers.google.com/maps/documentation/javascript/markers
    
}


$(document).ready(function() {
	initMap();
});
