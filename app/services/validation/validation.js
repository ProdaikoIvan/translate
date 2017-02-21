(function () {
    'use strict';

    angular
        .module('app')
        .factory('validation', validation);

    function validation() {

        var bookFormat = ['.pdf'];
        var coverFormat = ['.jpeg', ".jpg", ".png"]
        return {
            valid: valid
        };

        function valid(data, types) {
            if (data) {
                var name = data.name;
                var position = name.lastIndexOf(".");
                var formatFile = name.substring(position);
                for (var i = 0; i < types.length; i++) {
                    if (formatFile == types[i]) {
                        return true;
                    }
                }
                return false;
            }
        }
        
    }
})();