module.exports = {
    directive: ['coreConfig', 'brPolicyService', brNewPoliciesDirective],
    controller: ['$scope', 'brPolicyService', brNewPoliciesController]
};

function brNewPoliciesDirective(coreConfig, brPolicyService) {

    return {
        restrict: 'EA',
        replace: true,
        scope: {
            details: '='
        },
        controller: 'brNewPoliciesController',
        templateUrl: coreConfig.path() + "/modules/br-policy/directives/br.newpolicy.table.tmpl.html",
        link: function(scope, element, attrs, vm) {

        }
    };
}

function brNewPoliciesController($scope, brPolicyService) {
    $scope.dateFormat = 'MMM d, y';

        $scope.rowCollection= [];
     $scope.displayCollection = [];
     $scope.itemsByPage= 10;

    $scope.$watch("details", function(data){

        $scope.title = data.title;

        var req = {
            userid: data.userid,
            role: data.role
        };

        brPolicyService.getNewPolicies(req).then(function(result) {
            $scope.rowCollection = result;
            $scope.itemsByPage = data.itemsByPage;
            $scope.displayCollection = [].concat($scope.rowCollection);

            $scope.displayedPages = result.length/ $scope.itemsByPage;

        }, function(error) {
            alert(error.message);
        });
/*        if(data != {}){



        }*/
    });
}