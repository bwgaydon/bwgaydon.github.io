
function initMap() {
	
	var mapCenter = new google.maps.LatLng(39.5509506,-106.1812467);
	var abasinLL = new google.maps.LatLng(39.642411, -105.871656);
	var keystoneLL = new google.maps.LatLng(39.605871, -105.941375);
	var breckLL = new google.maps.LatLng(39.480504, -106.066885);
	var vailLL = new google.maps.LatLng(39.608681, -106.354909);
	var beaverLL = new google.maps.LatLng(39.605010, -106.516630);
	
	var mapOptions = {
		zoom: 11,
		center: mapCenter,
		mapTypeId: google.maps.MapTypeId.HYBRID
	};
	
	var map = new google.maps.Map(document.getElementById("map"),mapOptions);
	
	//resort markers
	var image = 'images/abasin.jpg';
    	var abasin = new google.maps.Marker({
	    position: abasinLL,
	    map: map,
	    title: 'Arapahoe Basin',
	    icon: image
	});
	image = 'images/keystone.jpg';
    	var keystone = new google.maps.Marker({
	    position: keystoneLL,
	    map: map,
	    title: 'Keystone',
	    icon: image
	});
	image = 'images/breck.png';
    	var breck = new google.maps.Marker({
	    position: breckLL,
	    map: map,
	    title: 'Breckenridge',
	    icon: image
	});
	image = 'images/vail.png';
    	var vail = new google.maps.Marker({
	    position: vailLL,
	    map: map,
	    title: 'Vail',
	    icon: image
	});
	image = 'images/beaver.jpg';
    	var beaver = new google.maps.Marker({
	    position: beaverLL,
	    map: map,
	    title: 'Beaver Creek',
	    icon: image
	});
	
}


$(document).ready(function() {
	initMap();
});
