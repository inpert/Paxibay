module.exports = angular.module('SampleApp.view1', ['ngRoute'])

.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/view1', {
        templateUrl: 'modules/view1/view1.html',
        controller: 'View1Ctrl'
    });
}])

.controller('View1Ctrl', ['$scope', function ($scope) {
    $scope.test = "Testing...aaaa";
    console.log("required!");
}]);