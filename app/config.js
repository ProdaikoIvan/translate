
/**
 * Created by Enot on 07.02.2017.
 */
'use strict';
angular.module('app')
    .config(['$mdThemingProvider',
        function ($mdThemingProvider) {
            var customPrimary = {
                '50': '#23ffd4',
                '100': '#0affcf',
                '200': '#00efc0',
                '300': '#00d6ac',
                '400': '#00bc97',
                '500': '#00a383',
                '600': '#00896f',
                '700': '#00705a',
                '800': '#005646',
                '900': '#003d31',
                'A100': '#3dffd9',
                'A200': '#56ffde',
                'A400': '#70ffe3',
                'A700': '#00231d'
            };
            $mdThemingProvider
                .definePalette('customPrimary',
                customPrimary);

            var customAccent = {
                '50': '#000a08',
                '100': '#00231d',
                '200': '#003d31',
                '300': '#005646',
                '400': '#00705a',
                '500': '#00896f',
                '600': '#00bc97',
                '700': '#00d6ac',
                '800': '#00efc0',
                '900': '#0affcf',
                'A100': '#00bc97',
                'A200': '#00a383',
                'A400': '#00896f',
                'A700': '#23ffd4'
            };
            $mdThemingProvider
                .definePalette('customAccent',
                customAccent);

            var customWarn = {
                '50': '#ff8080',
                '100': '#ff6666',
                '200': '#ff4d4d',
                '300': '#ff3333',
                '400': '#ff1a1a',
                '500': '#ff0000',
                '600': '#e60000',
                '700': '#cc0000',
                '800': '#b30000',
                '900': '#990000',
                'A100': '#ff9999',
                'A200': '#ffb3b3',
                'A400': '#ffcccc',
                'A700': '#CC0000'
            };
            $mdThemingProvider
                .definePalette('customWarn',
                customWarn);

            var customBackground = {
                '50': '#ffffff',
                '100': '#ffffff',
                '200': '#ffffff',
                '300': '#ffffff',
                '400': '#ffffff',
                '500': '#fff',
                '600': '#f2f2f2',
                '700': '#e6e6e6',
                '800': '#d9d9d9',
                '900': '#000',
                'A100': '#ffffff',
                'A200': '#ffffff',
                'A400': '#ffffff',
                'A700': '#bfbfbf'
            };
            $mdThemingProvider
                .definePalette('customBackground',
                customBackground);

            $mdThemingProvider.theme('default')
                .primaryPalette('customPrimary')
                .accentPalette('customAccent')
                .warnPalette('customWarn')
                .backgroundPalette('customBackground')

        }
    ]);