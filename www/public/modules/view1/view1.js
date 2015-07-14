
//angular.module('SampleApp.view1', ['ngRoute'])

//.config(['$routeProvider', function($routeProvider) {
//  $routeProvider.when('/view1', {
//    templateUrl: 'view1/view1.html',
//    controller: 'View1Ctrl'
//  });
//}])

//.controller('View1Ctrl', ['$scope', function ($scope) {
//    $scope.test = "Testing...aaaa";
//    console.log("required!");
//}]);



//var angular = require('angular');
//var bulk = require('bulk-require');

module.exports = angular.module('SampleApp.view1', ['ngRoute'])

.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/view1', {
        templateUrl: 'view1/view1.html',
        controller: 'View1Ctrl'
    });
}])

.controller('View1Ctrl', ['$scope', function ($scope) {
    $scope.test = "Testing...aaaa";
    console.log("required!");
}]);


//var modules = bulk(basedir, globs, opts={})
//bulk(__dirname, ['./**/!(*_index|*.spec).js']);