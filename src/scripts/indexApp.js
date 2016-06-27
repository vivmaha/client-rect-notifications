var indexApp = angular.module('indexApp', [
    'ngRoute',
    'ngAnimate',
    'directives',
    'ngUiClientRectNotifications',
]);

indexApp.config(['$routeProvider', '$compileProvider',
    function ($routeProvider, $compileProvider) {
        $routeProvider.when('/', {
            templateUrl: 'pages/home/home.html',
            controller: 'pageHome', 
        });
        
        $compileProvider.debugInfoEnabled(false);
    }
]);