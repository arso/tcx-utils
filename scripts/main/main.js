require.config({
    baseUrl: 'scripts/main/lib',
    paths: {
        'app': '../app',
        //'underscore': 'vendor/underscore-1.9.min'
    },
    shim: {
        'jquery': {
            exports: '$'
        }//,
        //'underscore': {
        //    exports: '_'
        //}
    }
});

require(['jquery','app/arso/tcx-utils/log/L','app/arso/tcx-utils/osm/OSMService'], function($,LRef,OSMServiceRef) {
    "use strict";

    console.log('jQuery version:', $.fn.jquery); // 2.0.3
    
    var l = new LRef();
    l.logModuleLoaded(l);
 
    var osmService = new OSMServiceRef();
    l.logModuleLoaded(osmService);
    
    
    //initialize open street map
    osmService.drawRoute('mapdiv');

});



