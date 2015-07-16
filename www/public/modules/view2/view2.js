//module.exports = angular.module('SampleApp.view2', ['ngRoute'])

//.config(['$routeProvider', function ($routeProvider) {
//    $routeProvider.when('/view2', {
//        templateUrl: 'modules/view2/view2.html',
//        controller: 'View2Ctrl as vm'
//    });
//}])

//.controller('View2Ctrl', ['$scope', function ($scope) {
//    $scope.test = "View2Ctrl Testing... this is view 2 ";

//    var vm = this;
//    vm.title = 'view2 My Policy List';

//    console.log("required!");

//}]);




angular.module('SampleApp.view2', [])
    .config(require('./view2.routes.js'))
    .controller('view2Controller', require('./view2.controller.js'));
