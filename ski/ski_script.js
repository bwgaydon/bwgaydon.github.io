function initMap() {
	/*
	L.mapbox.accessToken = 'pk.eyJ1IjoiYndnYXlkb24iLCJhIjoiY2lreWxtd3U5MDJzcnZvbTNyeHlod2ZqZSJ9.oLn2gLt8kJu05nLxYkMBEQ';
      	var map = L.mapbox.map('map', 'mapbox.streets')
      		.setView([39.567890,-106.1812467], 12);
          
  		var featureLayer = L.mapbox.featureLayer()
	        .loadURL('/ski/json/resorts.geojson')
	        .addTo(map);
        
		featureLayer.on('ready', function() {
    		map.fitBounds(featureLayer.getBounds());
		});
	*/
	
	L.mapbox.accessToken = 'pk.eyJ1IjoiYndnYXlkb24iLCJhIjoiY2lreWt6bWx2MDJucHV5bTNvdmh5YTZpNSJ9.vzU7XIQEhwBKdhhZMev9gA';
var map = L.mapbox.map('map', 'mapbox.streets')
    .setView([40, -74.50], 8);

var myLayer = L.mapbox.featureLayer().addTo(map);

var geoJson = [{
    "type": "Feature",
    "geometry": {
        "type": "Point",
        "coordinates": [-75.00, 40]
    },
    "properties": {
        "title": "Small astronaut",
        "icon": {
            "iconUrl": "http://bwgaydon.github.io/ski/images/abasin.jpg",
            "iconSize": [50, 50], // size of the icon
            "iconAnchor": [25, 25], // point of the icon which will correspond to marker's location
            "popupAnchor": [0, -25]
        }
    }
}, {
    "type": "Feature",
    "geometry": {
        "type": "Point",
        "coordinates": [-74.00, 40]
    },
    "properties": {
        "title": "Big astronaut",
        "icon": {
            "iconUrl": "/mapbox.js/assets/images/astronaut2.png",
            "iconSize": [100, 100],
            "iconAnchor": [50, 50],
            "popupAnchor": [0, -55],
            "className": "dot"
        }
    }
}];

// Set a custom icon on each marker based on feature properties.
myLayer.on('layeradd', function(e) {
    var marker = e.layer,
        feature = marker.feature;

    marker.setIcon(L.icon(feature.properties.icon));
});

// Add features to the map.
myLayer.setGeoJSON(geoJson);

}


$(document).ready(function() {
	
	//epicMixWeather = $.getJSON("http://www.epicmix.com/vailresorts/sites/epicmix/api/mobile/weather.ashx");
	
	initMap();
	
});
