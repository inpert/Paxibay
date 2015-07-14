(function () {

    //'use strict';

    require('angular');
    require('angular-route');
    require('angular-animate');

    var mainCtrl = require('./modules/weather/mainctrl');
    require('./view1/view1');   //'SampleApp.view1', 'SampleApp.view2'
    require('./view2/view2');   //
    //require('./modules/weather/_index'); // 'app.controllers', 


    angular.module('SampleApp', ['ngRoute', 'ngAnimate', 'SampleApp.view1', 'SampleApp.view2'])

    //.config([
    //  '$locationProvider',
    //  '$routeProvider',
    //  function ($locationProvider, $routeProvider) {
    //      $locationProvider.hashPrefix('!');
    //      // routes
    //      $routeProvider
    //        .when("/", {
    //            templateUrl: "./partials/partial1.html",
    //            controller: "MainController"
    //        })
    //        .otherwise({
    //            redirectTo: '/'
    //        });
    //  }
    //])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.otherwise({ redirectTo: '/view1' });
    }])

    //Load controller
    .controller('MainController', ['$scope', mainCtrl]);

    //var aa = 'this is testing';

    
}());



//'use strict';

//// Declare app level module which depends on views, and components
//angular.module('myApp', [
//  'ngRoute',
//  'SampleApp.view1',
//  'SampleApp.view2',
//  'SampleApp.version'
//]).
//config(['$routeProvider', function ($routeProvider) {
//    $routeProvider.otherwise({ redirectTo: '/view1' });
//}]);

