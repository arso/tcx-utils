define(function () {
  
  return {
    getName: function(){
      return 'tcxParser';
    },
    extractGeoTrackPoints: function(tcxXml){
      //todo use xpath to select all Trackpoint/Position/{LatitudeDegrees|LongitudeDegrees}
      console.log('extract_geo_tractpoints not yet implememted !!');
      var trackPoints  = new Array();
      
      return trackPoints;
    }
  };


});

