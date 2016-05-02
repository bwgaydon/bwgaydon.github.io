function initMap(area) {
	
	L.mapbox.accessToken = 'pk.eyJ1IjoiYndnYXlkb24iLCJhIjoiY2lreWxtd3U5MDJzcnZvbTNyeHlod2ZqZSJ9.oLn2gLt8kJu05nLxYkMBEQ';
      	var map = L.mapbox.map('map', 'mapbox.streets');
      		
  	var featureLayer = L.mapbox.featureLayer()
	        .loadURL('/json/'+ area +'.geojson')
	        .addTo(map);
        
    featureLayer.on('layeradd', function(e) {
		var marker = e.layer,
		feature = marker.feature;
		marker.setIcon(L.icon(feature.properties.icon));
		
		var popupContent =  '<link href="//www.snow-forecast.com/stylesheets/feed.css" media="screen" rel="stylesheet" type="text/css" /><div id="wf-weatherfeed"><iframe style="overflow:hidden;border:none;" allowtransparency="true" height="272" width="469" src="//www.snow-forecast.com/resorts/' + feature.properties.title.replace(" ","-") + '/forecasts/feed/mid/m" scrolling="no" frameborder="0" marginwidth="0" marginheight="0"><p>Your browser does not support iframes.</p></iframe><div id="wf-link"><div style="clear: both;"></div></div></div>';

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
	
	$('.button').each(function() {
		this.addEventListener("click", function() {
			
			initMap(this.id);
			
			$('#area_choice').css("opacity",0);
             setTimeout(function(){
                $('#area_choice').css("display","none");
                $('#container').css("z-index",2);
                $('#container').css("opacity",1);
            }, 200);
		})
	})
	
});
