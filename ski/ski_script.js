function initMap() {
	
	L.mapbox.accessToken = 'pk.eyJ1IjoiYndnYXlkb24iLCJhIjoiY2lreWxtd3U5MDJzcnZvbTNyeHlod2ZqZSJ9.oLn2gLt8kJu05nLxYkMBEQ';
      	var map = L.mapbox.map('map', 'mapbox.streets')
      		.setView([39.567890,-106.1812467], 9);
          
  		var featureLayer = L.mapbox.featureLayer()
	        .loadURL('/ski/json/resorts.geojson')
	        .addTo(map);
        
		featureLayer.on('ready', function() {
    		map.fitBounds(featureLayer.getBounds());
		});
	
}


$(document).ready(function() {
	
	//epicMixWeather = $.getJSON("http://www.epicmix.com/vailresorts/sites/epicmix/api/mobile/weather.ashx");
	
	initMap();
	
});
