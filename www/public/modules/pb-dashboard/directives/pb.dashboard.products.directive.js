module.exports = {
    directive: ['pbDashboardService', pbDashboardTableDirective],
    controller: ['$scope', 'pbDashboardService', pbDashboardTableController]
};

function pbDashboardTableDirective(coreConfig, pbDashboardService) {

    return {
        restrict: 'EA',
        replace: true,
        scope: {
            details: '='
        },
        controller: 'pbDashboardTableController',
        templateUrl: "./modules/pb-dashboard/directives/pb.dashboard.table.tmpl.html",
        link: function (scope, element, attrs, vm) {

        }
    };
}

function pbDashboardTableController($scope, pbDashboardService) {
    $scope.dateFormat = 'MMM d, y';

    $scope.rowCollection = [];
    $scope.displayCollection = [];
    $scope.itemsByPage = 10;

    $scope.$watch("details", function (data) {

        //$scope.title = data.title;

        var req = {
            //userid:data.userid,
            //role:data.role
        };

        //brPolicyService.getMyPolicies(req).then(function (result) {
        //    $scope.rowCollection = result;
        //    $scope.itemsByPage = data.itemsByPage;
        //    $scope.displayCollection = [].concat($scope.rowCollection);

        //    $scope.displayedPages = result.length / $scope.itemsByPage;

        //}, function (error) {
        //    alert(error.message);
        //});
    });
}

