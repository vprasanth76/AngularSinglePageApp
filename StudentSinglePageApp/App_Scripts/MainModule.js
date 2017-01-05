var MainModule = angular.module("MainModule", ['ngRoute', 'ngMessages', 'MainModule.directives', 'MainModule.filters', 'ui.bootstrap', 'logToServer']);

angular.module('MainModule.filters', [])
        .filter('telephone', TelephoneFilter);

angular.module('MainModule.directives', [])
        .directive('pvUnique', UniqueDirective);


MainModule.factory("StudentData", function () {
    return {value : 0}
});

MainModule.config(function ($routeProvider) {
  
    /*
    $routeProvider
        .when('/',
        {
            templateUrl: 'pages/home.html',
            controller: 'mainController'
        })
        .when('/add',
        {
            templateUrl: 'pages/about.html',
            controller: 'aboutController'
        })
        .when('/contact',
        {
            templateUrl: 'pages/contact.html',
            controller: 'contactController'
        })
        .otherwise({
            redirectTo: '/'
        });    
    */

    $routeProvider
        .when('/',
        {
            templateUrl: 'students/ShowStudents',
            controller: 'mainController'
        })
        .when('/add',
        {
            templateUrl: 'students/AddStudent',
            controller: 'addController'
        })
        .when('/edit',
        {
            templateUrl: 'students/EditStudent',
            controller: 'editController'
        })
        .otherwise({
            redirectTo: '/'
        });

    //$locationProvider.html5Mode(true).hashPrefix('!');
});

MainModule.controller('mainController', MainController);
MainModule.controller('editController', EditController);
MainModule.controller('addController', AddController);

MainModule.config(['$httpProvider', function ($httpProvider) {
    $httpProvider.interceptors.push('logToServerInterceptor');
}]);
