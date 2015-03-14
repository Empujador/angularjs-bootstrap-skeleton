'use strict';

angular.module('myABS', [
    'ngRoute',
    'ngSanitize',
    'ui.bootstrap'
])

.config(['$routeProvider', function($routeProvider){
    $routeProvider
        .when('/example',{
            controller: 'ExampleCtrl',
            templateUrl: 'tpl/controller/example.html'
        })
        .otherwise({
            redirectTo: '/example'
        });
}])

.run([
    'absFixtures', '$rootScope', '$location',
    function(absFixtures, $rootScope, $location){
        $rootScope.goTo = function(path){
            path = path[0] == '/' ? path : '/' + path;

            $location.path(path);
        };
    }
])

.value('absConfig', {
    navigation: [
        {
            icon: 'fa-windows',
            i18n: 'example',
            href: '/example'
        }
    ]
});
