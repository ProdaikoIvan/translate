
(function () {
    'use strict';

    angular
        .module('app')
        .controller('navCtrl', navCtrl);

    navCtrl.inject = ['$scope', '$mdSidenav'];
    
    function navCtrl($scope, $mdSidenav) {
        var nav = this;

        nav.opening = true;

        nav.open = open;

        function open() {
            nav.opening = !nav.opening;
        }

        nav.toggleLeft = buildToggler('left');

        function buildToggler(componentId) {
            return function () {
                $mdSidenav(componentId).toggle();
            };
        }
    }
})();