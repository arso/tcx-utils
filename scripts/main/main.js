require(["jquery-2.0.3"], function(jquery){
  console.log( $ ) // OK
});

//require(["OpenLayers-2.13.1/lib/OpenLayers"], function(OpenLayers){
//  console.log( $ ) // OK
//});

require(["arso/tcx-utils/parsers/TcxParser"], function(TcxParser) {
  console.log( $ ) // OK

      //This function is called when scripts/helper/util.js is loaded.
      //If util.js calls define(), then this function is not fired until
      //util's dependencies have loaded, and the util argument will hold
      //the module value for "helper/util".  aa
});
