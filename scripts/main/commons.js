require.config({
    baseUrl: 'scripts/main',
    paths: {
        'jQuery': 'jquery-2.0.3',
        //'underscore': 'vendor/underscore-1.9.min'
    },
    shim: {
        'jQuery': {
            exports: '$'
        }//,
        //'underscore': {
        //    exports: '_'
        //}
    }
});

require(['jQuery'], function($) {
    "use strict";
 
    console.log('base loaded');
    console.log('jQuery version:', $.fn.jquery); // 2.0.3
});



