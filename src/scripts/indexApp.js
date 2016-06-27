exports.app = angular.module('indexApp', [
    'ngRoute',
    'ngAnimate',
    'directives',
    'ngUiClientRectNotifications',
]);

exports.app.config(['$routeProvider', '$compileProvider',
    function ($routeProvider, $compileProvider) {
        $routeProvider.when('/', {
            templateUrl: 'pages/home/home.html',
            controller: 'pageHome', 
        });
        
        $compileProvider.debugInfoEnabled(false);
    }
]);