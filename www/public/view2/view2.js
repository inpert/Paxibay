
//angular.module('SampleApp.view2', ['ngRoute'])

//.config(['$routeProvider', function($routeProvider) {
//  $routeProvider.when('/view2', {
//    templateUrl: 'view2/view2.html',
//    controller: 'View2Ctrl'
//  });
//}])

//.controller('View2Ctrl', ['$scope', function ($scope) {
//    $scope.test = "View2Ctrl Testing...dddd this tesing";
//    console.log("required!");


//}]);


module.exports = angular.module('SampleApp.view2', ['ngRoute'])

.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/view2', {
        templateUrl: 'view2/view2.html',
        controller: 'View2Ctrl'
    });
}])

.controller('View2Ctrl', ['$scope', function ($scope) {
    $scope.test = "View2Ctrl Testing...dddd this tesing";
    console.log("required!");


}]);