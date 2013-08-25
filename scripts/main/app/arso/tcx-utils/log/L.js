define([], function () {

    return {
        _name: "L",
        getName: function () {
            return this._name;
        },

        logModuleLoaded: function (module) {
            console.log("Module loaded: " + module.getName());
        }
    };

})
