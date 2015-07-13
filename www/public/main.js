
//var app = angular.module('mainApp', ['customer']);


//app.controller('mainCtrl', function () {

//});



(function () {

    'use strict';

    require('angular');
    require('angular-route');
    require('angular-animate');

    var mainCtrl = require('./modules/weather/mainctrl');
    //var view1 = require('./view1/view1');
    //var view2 = require('./view2/view2');

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

    var str = '';
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