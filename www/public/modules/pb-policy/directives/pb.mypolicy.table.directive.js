module.exports = {
    directive: ['coreConfig', 'brPolicyService', brMyPoliciesDirective],
    controller: ['$scope', 'brPolicyService', brMyPoliciesController]
};

function brMyPoliciesDirective(coreConfig, brPolicyService) {

    return {
        restrict: 'EA',
        replace: true,
        scope: {
            details: '='
        },
        controller: 'brMyPoliciesController',
        templateUrl: coreConfig.path() + "/modules/br-policy/directives/br.mypolicy.table.tmpl.html",
        link: function (scope, element, attrs, vm) {

        }
    };
}

function brMyPoliciesController($scope, brPolicyService) {
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

        brPolicyService.getMyPolicies(req).then(function (result) {
            $scope.rowCollection = result;
            $scope.itemsByPage = data.itemsByPage;
            $scope.displayCollection = [].concat($scope.rowCollection);

            $scope.displayedPages = result.length / $scope.itemsByPage;

        }, function (error) {
            alert(error.message);
        });
    });
}