define([], function(){
  var L = function(){
  
    var _name = "L";
    this.getName = function(){
      return _name;
    }

    this.logModuleLoaded = function(module){
      console.log("Module loaded: "+module.getName());
    }
  };

  return L;

})
