
(function() {
'use strict';

    angular
        .module('app')
        .factory('request', request);

    request.inject = ['$http', '$q', 'url'];
    function request($http, $q, url) {
        return {
            request: request
        };

        function request(methodHttp, urlPath, data) {
            var defer = $q.defer();
            $http({
                method: methodHttp,
                url: url.server + urlPath,
                data: data,
                dataType: 'json',
                headers: {
                    'Content-Type':undefined
                }
            }).then(function (data) {
                console.log(data);
                defer.resolve(data);
            },function (dataError) {
                console.log(dataError);
                defer.reject(data);
            });
            return defer.promise;
        }
    }
})();