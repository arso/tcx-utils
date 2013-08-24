define(['jquery'], function ($) {

  var fileLoader = function() {
      var _name = "fileLoader";
      this.getName = function() {
        return _name;
      }


      this.handleFileSelect = function(event){
        var files = event.target.files;
        console.log('File with track successfully loaded: '+files[0].name);
        //TODO parse tcx and use osm service to draw route
      }

      
      if (window.File && window.FileReader && window.FileList && window.Blob) {
        // Great success! All the File APIs are supported.
        console.log("File API supported");
      } else {
        alert('The File APIs are not fully supported in this browser.');
      }


      this.registerTrackFileLoadEvenHandler = function(fileLoaderInputId){

          var input = $('#'+fileLoaderInputId);
          if(input.size()==1){
            input[0].addEventListener('change', this.handleFileSelect, false);
          }else{
            console.log(fileLoaderInputId+' element not found');
          }
        
      }
  };

  return fileLoader;

});
