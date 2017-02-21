(function () {
    'use strict';

    angular
        .module('app')
        .factory('bookConvert', bookConvert);

    bookConvert.inject = ['url', '$http', '$q', 'request'];
    function bookConvert(url, $http, $q, request) {

        return {
            convert: convert
        };

        function convert(data) {
            var fd = new FormData();
            for (var d in data) {
                fd.append(d, data[d]);
            }
            
            request.request("POST", url.convert.convert, fd);
        }
    }
})();

