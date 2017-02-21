/**
 * Created by Enot on 07.02.2017.
 */
'use strict';
angular.module('app')
    .config(['$stateProvider', '$urlRouterProvider',
        function ($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise('/books');
            $stateProvider
                .state('login', {
                    url: '/login',
                    templateUrl: 'templates/login/login.html',
                    controller: 'LoginCtrl',
                    controllerAs: 'vm'
                }).state('books', {
                    url: '/books',
                    templateUrl: 'templates/books/books.html',
                    controller: 'BooksCtrl',
                    controllerAs: 'vm'
                });
        }
    ]);