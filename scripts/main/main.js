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

require(['jquery','app/arso/tcx-utils/log/L','app/arso/tcx-utils/osm/OSMService','app/arso/tcx-utils/file/FileLoader'], function($,LRef,OSMServiceRef,FileLoaderRef) {
    "use strict";

    console.log('jQuery version:', $.fn.jquery); // 2.0.3
    
    var l = new LRef();
    l.logModuleLoaded(l);
 
    var osmService = new OSMServiceRef();
    l.logModuleLoaded(osmService);

    var fileLoader = new FileLoaderRef();
    l.logModuleLoaded(fileLoader);

    
    
    //initialize open street map
    osmService.drawRoute('mapdiv');

    //initilize file loader
    fileLoader.registerTrackFileLoadEvenHandler('trackInput');

});



