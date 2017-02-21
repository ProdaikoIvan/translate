(function () {
    'use strict';

    angular
        .module('app')
        .controller('addFormCtrl', addFormCtrl);

    addFormCtrl.inject = ['bookConvert', '$scope', 'validation'];

    function addFormCtrl(bookConvert, $scope, validation) {
        var add = this;

        add.bookName = "book is not selected";
        add.bookCoverName = "cover is not selected";

        add.book = {
            name: "",
            author: "",
            year: "",
            native_lang: "",
            foreign_lang: "",
            pdf: "",
            photo: ""
        };

        $scope.uploadBook = uploadBook;
        $scope.uploadCover = uploadCover;
        add.getData = getData;

        function uploadBook(index) {
            var resValid = validation.valid(index.files[0], ['.pdf']);
            console.log(index.files[0]);
            if (resValid) {
                add.book.pdf = index.files[0];
            } else {
                console.log('error type file');
            }
        }

        function uploadCover(index) {
            var resValid = validation.valid(index.files[0], ['.jpeg', ".jpg", ".png", ".gif"]);
            if (resValid) {
                add.book.photo = index.files[0];
            } else {
                console.log('error type file');
            }
        }

        function getData(form) {
            //var result = validation.valid(form);
           
                bookConvert.convert(add.book);
                // add.book = {};
                // form.$setPristine();
                // form.$setUntouched();
            

        }
    }
})();