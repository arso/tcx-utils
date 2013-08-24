define([], function () {
  
  var tcxParser = function () {
    var _name = 'tcxParser';
    this.getName = function() {
      return _name;
    }

    
    this.extractGeoTrackPoints = function(tcxXml){
      //todo use xpath to select all Trackpoint/Position/{LatitudeDegrees|LongitudeDegrees}
      console.log('extract_geo_tractpoints not yet implememted !!');
      var trackPoints  = new Array();
      
      return trackPoints;
    }
  };

  return tcxParser;

});

