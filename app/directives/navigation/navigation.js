
(function() {
    'use strict';

    angular
        .module('app')
        .directive('nav', nav);

    function nav() {
        return {
            templateUrl: "directives/navigation/navigation.html",
            link: link,
            restrict: 'AE',
            replace: true,
            controller: 'navCtrl',
            controllerAs: 'nav',
        };
        
        function link(scope, element, attrs) {

        }
    }
})();