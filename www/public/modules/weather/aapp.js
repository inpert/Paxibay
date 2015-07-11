
angular.module('customer', [])
.controller('rootViewModel', function ($scope) {
    $scope.city = { name: 'toronto ' };
    $scope.tax = 100;
});
