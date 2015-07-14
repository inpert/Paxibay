(function () {

    require('angular');
    require('angular-route');
    require('angular-animate');

    var mainCtrl = require('./modules/weather/mainctrl');
    require('./modules/view1/view1');  
    require('./modules/view2/view2');   

    var requires = [
      'ngRoute',
      'ngAnimate',
      'SampleApp.view1',
      'SampleApp.view2'
    ];

    angular.module('SampleApp', requires)

    .config([
      '$locationProvider',
      '$routeProvider',
      function ($locationProvider, $routeProvider) {
          //$locationProvider.hashPrefix('!');
          
          $routeProvider
            .when("/", {
                templateUrl: "./modules/view1/view1.html"
            })
            .otherwise({
                redirectTo: '/'
            });
      }
    ])

    //Load controller
    .controller('MainController', ['$scope', mainCtrl]);
    
    angular.bootstrap(document, ['SampleApp']);
}());
