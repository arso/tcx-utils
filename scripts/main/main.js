require.config({
    baseUrl: 'scripts/main/lib',
    paths: {
        'app': '../app'
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

require(['jquery',
    'app/arso/tcx-utils/log/L',
    'app/arso/tcx-utils/osm/OSMService',
    'app/arso/tcx-utils/file/FileLoader',
    'app/arso/tcx-utils/parsers/TcxParser'
],
    function ($, log, osmService, fileLoader, tcxParser) {
        "use strict";

        console.log('jQuery version:', $.fn.jquery); // 2.0.3

        log.logModuleLoaded(log);
        log.logModuleLoaded(osmService);
        log.logModuleLoaded(fileLoader);
        log.logModuleLoaded(tcxParser);


        //initialize open street map
        osmService.initializeMap('mapdiv');

        //initilize file loader
        fileLoader.registerTrackFileLoadEvenHandler('trackInput');

    });



