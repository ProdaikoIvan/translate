(function () {
    'use strict';

    angular
        .module('app')
        .controller('BooksCtrl', BooksCtrl);

    BooksCtrl.inject = ['$scope', 'bookConvert'];

    function BooksCtrl($scope, bookConvert) {
        var vm = this;
        vm.lockLeft = true;
        vm.headerName = "Books";
    }
})();