var myApp = angular.module('myApp', ['ngRoute', 'angularCSS']);

myApp.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
  
  // $routeProvider
  // .when('/', {
  //   templateUrl: 'static/partials/login.html',
  //   controller: 'loginController',
  //   css: 'static/css/login/login.css'
  // })
  // .when('/main', {
  //   templateUrl: 'static/partials/main.html',
  //   // controller: 'mainController',
  //   // css: 'static/css/test.css'
  // })
  // .when('/hello', {
  //   templateUrl: 'static/partials/hi.html'
  // })
  // .otherwise({
  //   redirectTo: '/'
  // });
  // $locationProvider.html5Mode({
  //   enabled: true,
  //   requireBase: false,
  //   rewriteLinks: false

  // });
}]);