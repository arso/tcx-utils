define([], function () {

  var fileLoader = function() {
      var _name = "fileLoader";
      this.getName = function() {
        return _name;
      }


      this.handleLoadFileEvent = function(event){
        var file = event.target.file;

      }

      
      if (window.File && window.FileReader && window.FileList && window.Blob) {
        // Great success! All the File APIs are supported.
        console.log("File API supported");
      } else {
        alert('The File APIs are not fully supported in this browser.');
      }
  };

  return fileLoader;

});
