
(function() {
    'use strict';

    angular
        .module('app')
        .directive('listBook', listBook);

    listBook.inject = [''];
    function listBook() {
        return {
            replace: true,
            templateUrl: 'directives/listbooks/listBook.html',
            controller: 'ListBookCtrl',
            controllerAs: 'list',
            restrict: 'AE'
        };

    }
})();