require('angular');
require('angular-route');
require('angular-animate');

//require('./modules/br-policy/br.policy.app');
require('./modules/pb-capital/pb.capital.app.js');
require('./modules/pb-settings/pb.settings.app.js');

require('./modules/view1/view1');
require('./modules/view2/view2');

var mainCtrl = require('./modules/weather/mainctrl');

var dependencyModules = [
  'ngRoute',
  'ngAnimate',
  'SampleApp.view1',
  'SampleApp.view2',
  //'br.policyModule',
  'pb.capitalModule',
  'pb.settingsModule'
];

angular.module('SampleApp', dependencyModules)

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

//(function () {
//    require('angular');
//    require('angular-route');
//    require('angular-animate');
    
//    require('./modules/view1/view1');  
//    require('./modules/view2/view2');

//    var mainCtrl = require('./modules/weather/mainctrl');

//    var requires = [
//      'ngRoute',
//      'ngAnimate',
//      'SampleApp.view1',
//      'SampleApp.view2'
//    ];

//    angular.module('SampleApp', requires)

//    .config([
//      '$locationProvider',
//      '$routeProvider',
//      function ($locationProvider, $routeProvider) {
//          //$locationProvider.hashPrefix('!');
          
//          $routeProvider
//            .when("/", {
//                templateUrl: "./modules/view1/view1.html"
//            })
//            .otherwise({
//                redirectTo: '/'
//            });
//      }
//    ])

//    //Load controller
//    .controller('MainController', ['$scope', mainCtrl]);
    
//    angular.bootstrap(document, ['SampleApp']);
//}());
