

(function() {
    'use strict';

    angular
        .module('app')
        .directive('header', header);

    function header() {
        return {
            templateUrl: "directives/header/header.html",
            link: link,
            restrict: 'A',
        };
    
        function link(scope, element, attrs) {
            console.log('header link');
        }
    }
})();