var indexApp = angular.module('indexApp', [
    'ngRoute',
    'ngAnimate',
    'ngSanitize',
    'directives',
    'services',
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