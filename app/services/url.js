(function () {
    'use strict';

    angular
        .module('app')
        .factory('url', url);


    function url() {
        var model = {};
        //model.server = "http://transbook.apes-at-work.com/api/web/v1/book/";
        model.server = "http://192.168.0.123/api/web/v1/book/";

        model.login = {
            /**
        * @param mail
        * @param pass
        * @param return authkey
        * */
            login: ""
        }
        model.reqistration = {
            /**
     * @param mail
     * @param pass
     * @param return authkey
     * */
            reqistration: ""
        }
        model.convert = {
            /**
            * @param bookname
            * @param author
            * @param year
            * @param language book
            * @param language translate
            * @param book pdf
            * @param book cover
            */
            convert: "convert"
        }

        return model;
    }
})();