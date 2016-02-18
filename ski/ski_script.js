
function initMap() {
	
	var mapCenter = new google.maps.LatLng(39.5515506,-106.1812467);
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
	var image = {url:'images/abasin.jpg',scaledSize: new google.maps.Size(30, 30)};
	
	var abasin = new google.maps.Marker({
	    position: abasinLL,
	    map: map,
	    title: 'Arapahoe Basin',
	    icon: image
	});
	abasinInfo = new google.maps.InfoWindow({
			content: "Arapahoe Basin"
	});
	abasin.addListener('click', function() {
		abasinInfo.open(map, abasin);
	});
	
	image.url = 'images/keystone.jpg';
	var keystone = new google.maps.Marker({
	    position: keystoneLL,
	    map: map,
	    title: 'Keystone',
	    icon: image
	});
	keystoneInfo = new google.maps.InfoWindow({
			content: "Keystone"
	});
	keystone.addListener('click', function() {
		keystoneInfo.open(map, keystone);
	});
	
	image.url = 'images/breck.png';
	var breck = new google.maps.Marker({
	    position: breckLL,
	    map: map,
	    title: 'Breckenridge',
	    icon: image
	});
	breckInfo = new google.maps.InfoWindow({
			content: "Breckenridge"
	});
	breck.addListener('click', function() {
		breckInfo.open(map, breck);
	});
	
	image.url = 'images/vail.png';
	var vail = new google.maps.Marker({
	    position: vailLL,
	    map: map,
	    title: 'Vail',
	    icon: image
	});
	vailInfo = new google.maps.InfoWindow({
			content: "Vail"
	});
	vail.addListener('click', function() {
		vailInfo.open(map, vail);
	});
	
	image.url = 'images/beaver.jpg';
	var beaver = new google.maps.Marker({
	    position: beaverLL,
	    map: map,
	    title: 'Beaver Creek',
	    icon: image
	});
	beaverInfo = new google.maps.InfoWindow({
		content: "Beaver Creek"
	});
	beaver.addListener('click', function() {
		beaverInfo.open(map, beaver);
	});
	
	resorts = [abasin,keystone,breck,vail,beaver];
	
	keystoneInfo.open(map, keystone);
	abasinInfo.open(map, abasin);
	breckInfo.open(map, breck);
	vailInfo.open(map, vail);
	beaverInfo.open(map, beaver);
	
}


$(document).ready(function() {
	initMap();
});
