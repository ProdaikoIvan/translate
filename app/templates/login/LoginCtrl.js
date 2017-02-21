/**
 * Created by Enot on 07.02.2017.
 */
(function() {
    'use strict';

    angular
        .module('app')
        .controller('LoginCtrl', LoginCtrl);

    LoginCtrl.inject = [];

    function LoginCtrl() {
        var vm = this;

        vm.template = "templates/login/loginForm.html";
        vm.userLogin = {
            login: "",
            password: ""
        };
        vm.userRegistration = {
            login: "",
            password: ""
        };


        vm.login = login;
        vm.registration = registration;

        function login(form) {
            if (form.$valid) {
                console.log(vm.userLogin);
            } else {
                console.error('invalid');
            }
        }

        function registration(form) {
            if (form.$valid) {
                console.log(vm.userRegistration);
            } else {
                console.error('invalid');
            }
        }
    }


})();