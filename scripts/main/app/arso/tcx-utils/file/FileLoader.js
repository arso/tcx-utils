define(['jquery', 'app/arso/tcx-utils/parsers/TcxParser', 'app/arso/tcx-utils/osm/OSMService'], function ($, TcxParserRef, OsmServiceRef) {

    var tcxParser = TcxParserRef;
    var osmService = new OsmServiceRef();

    var fileLoader = function () {
        var _name = "fileLoader";
        this.getName = function () {
            return _name;
        }


        this.handleFileSelect = function (event) {
            var files = event.target.files;
            console.log('File with track successfully loaded: ' + files[0].name);
            var reader = new FileReader();
            reader.onload = function (e) {
                console.debug(e.target.result);
                var xml = $(e.target.result);
                //Array[Position]
                console.log(tcxParser.getName());
                var points = tcxParser.extractGeoTrackPoints(xml);
                osmService.drawRoute(points);
            }
            reader.readAsText(files[0]);

        }


        if (window.File && window.FileReader && window.FileList && window.Blob) {
            // Great success! All the File APIs are supported.
            console.log("File API supported");
        } else {
            alert('The File APIs are not fully supported in this browser.');
        }


        this.registerTrackFileLoadEvenHandler = function (fileLoaderInputId) {

            var input = $('#' + fileLoaderInputId);
            if (input.size() == 1) {
                input[0].addEventListener('change', this.handleFileSelect, false);
            } else {
                console.log(fileLoaderInputId + ' element not found');
            }

        }
    };

    return fileLoader;

});
