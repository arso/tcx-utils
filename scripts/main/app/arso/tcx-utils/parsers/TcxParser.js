define(['jquery'], function ($) {

    return {

        getName: function () {
            return 'tcxParser';
        },

        extractGeoTrackPoints: function (tcxXml) {
            var trackPoints = new Array();
            $(tcxXml).find('Position').each(function () {
                var lattitude = $(this).find('LatitudeDegrees').text();
                var longitude = $(this).find('LongitudeDegrees').text();
                //console.log(lattitude +", "+longitude);
                var point = {latitude: lattitude, longitude: longitude};
                trackPoints.push(point);
            })
            console.log("Found " + trackPoints.length + " geo points.");
            return trackPoints;
        }
    };


});

