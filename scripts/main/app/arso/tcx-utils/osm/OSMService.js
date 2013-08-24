define([],function(){
  var osmService = function(){
    var _name ="osmService";
    
    this.getName = function(){
      return _name;
    }


    this.initializeMap = function(target){
      
      map = new OpenLayers.Map(target);
      map.addLayer(new OpenLayers.Layer.OSM());
      var lonLat = new OpenLayers.LonLat( 19.942322932183743,50.02348093315959 )
          .transform(
            new OpenLayers.Projection("EPSG:4326"), // transform from WGS 1984
            map.getProjectionObject() // to Spherical Mercator Projection
          );
 
      var zoom=16;
 
      var markers = new OpenLayers.Layer.Markers( "Markers" );
      map.addLayer(markers);
 
      markers.addMarker(new OpenLayers.Marker(lonLat));
 
      map.setCenter (lonLat, zoom);

    
    }


    this.drawRoute = function(pointsArray){
      //TODO implement
     console.log('TODO drawRoute not yet implemented');
    }


  };

  return osmService;
});
