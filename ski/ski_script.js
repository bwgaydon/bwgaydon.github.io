function initMap() {
	
	L.mapbox.accessToken = 'pk.eyJ1IjoiYndnYXlkb24iLCJhIjoiY2lreWxtd3U5MDJzcnZvbTNyeHlod2ZqZSJ9.oLn2gLt8kJu05nLxYkMBEQ';
      	var map = L.mapbox.map('map', 'mapbox.streets')
      		.setView([39.567890,-106.1812467], 1);
      		
  	var featureLayer = L.mapbox.featureLayer()
	        .loadURL('/json/resorts.geojson')
	        .addTo(map);
        
    featureLayer.on('layeradd', function(e) {
		var marker = e.layer,
		feature = marker.feature;
		marker.setIcon(L.icon(feature.properties.icon));
		
		var popupContent =  '<link href="//www.snow-forecast.com/stylesheets/feed.css" media="screen" rel="stylesheet" type="text/css" /><div id="wf-weatherfeed"><iframe style="overflow:hidden;border:none;" allowtransparency="true" height="272" width="469" src="//www.snow-forecast.com/resorts/Arapahoe-Basin/forecasts/feed/mid/m" scrolling="no" frameborder="0" marginwidth="0" marginheight="0"><p>Your browser does not support iframes.</p></iframe><div id="wf-link"><div style="clear: both;"></div></div></div>';

    // http://leafletjs.com/reference.html#popup
    marker.bindPopup(popupContent,{
        closeButton: false,
        minWidth: 499
    });
	});
    
	featureLayer.on('ready', function() {
		map.fitBounds(featureLayer.getBounds());
    	
	});

}


$(document).ready(function() {
	
	//epicMixWeather = $.getJSON("http://www.epicmix.com/vailresorts/sites/epicmix/api/mobile/weather.ashx");
	
	initMap();
	
});
