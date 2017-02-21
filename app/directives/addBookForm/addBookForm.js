(function() {
    'use strict';

    angular
        .module('app')
        .directive('addBookForm', addBookForm);

    addBookForm.inject = [''];
    function addBookForm() {
        return {
            templateUrl: "directives/addBookForm/addBookForm.html",
            controller: 'addFormCtrl',
            controllerAs: 'add',
            restrict: 'AE',
            replace: true
        };
    }

})();