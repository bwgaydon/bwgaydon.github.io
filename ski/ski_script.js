
function initMap() {
	
	var mapCenter = new google.maps.LatLng(39.5309506,-106.1812467);
	var abasinLL = new google.maps.LatLng(39.6423118,-105.8738741);
	var keystoneLL = new google.maps.LatLng(39.6053315,-105.9787014);
	var breckLL = new google.maps.LatLng(39.4805061,-106.0668799);
	var vailLL = new google.maps.LatLng(39.6061444,-106.3571604);
	var beaverLL = new google.maps.LatLng(39.6044293,-106.5189309);
	
	var mapOptions = {
		zoom: 11,
		center: mapCenter,
		mapTypeId: google.maps.MapTypeId.HYBRID
	};
	
	var map = new google.maps.Map(document.getElementById("map"),mapOptions);
	
	//resort markers
    	var abasin = new google.maps.Marker({
	    position: abasinLL,
	    map: map,
	    title: 'Arapahoe Basin'
	});
    	var keystone = new google.maps.Marker({
	    position: keystoneLL,
	    map: map,
	    title: 'Keystone'
	});
    	var breck = new google.maps.Marker({
	    position: breckLL,
	    map: map,
	    title: 'Breckenridge'
	});
    	var vail = new google.maps.Marker({
	    position: vailLL,
	    map: map,
	    title: 'Vail'
	});
    	var beaver = new google.maps.Marker({
	    position: beaverLL,
	    map: map,
	    title: 'Beaver Creek'
	});
	
}


$(document).ready(function() {
	initMap();
});
