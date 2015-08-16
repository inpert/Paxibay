module.exports = {
    directive: ['pbPjloansService', pbPjloansContentDirective],
  //directivePageSelect: [brExistingPoliciesPageSelect],
  controller: ['$scope', 'pbPjloansService', pbPjloansContentController]
};

function pbPjloansContentDirective(pbPjloansService) {

  return {
    restrict: 'EA',
    replace: true,
    scope: {
      details: '='
    },
    controller: 'pbPjloansContentController as vm',
    templateUrl: '/modules/pb-pjloans/directives/pb.pjloans.content.tmpl.html',
    link: function(scope, element, attrs, vm) {

      //scope.paginationTemplateUrl = coreConfig.path() + '/modules/br-policy/directives/br.custom.pagination.tmpl.html';

    }
  };
}

//function brExistingPoliciesPageSelect() {
//    return {
//        restrict: 'E',
//        template: '{{inputPage}}',
//        // template: '<input type="text" class="select-page" ng-model="inputPage" ng-change="selectPage(inputPage)">',
//        link: function (scope, element, attrs) {
//            scope.$watch('currentPage', function (c) {
//                scope.inputPage = c;
//            });
//        }
//    };
//}

function pbPjloansContentController($scope, pbPjloansService) {
    var vm = this;

    $scope.dateFormat = 'MMM d, y';

    $scope.rowCollection = [];
    $scope.displayCollection = [];
    $scope.itemsByPage = 10;
    //alert("here");

    $scope.$watch("details", function (data) {

        $scope.title = data.title;

        var req = {
            userid: data.userid,
            role: data.role
        };

        brPolicyService.getExistingPolicies(req).then(function (result) {
            $scope.rowCollection = result;
            $scope.itemsByPage = data.itemsByPage;
            $scope.displayCollection = [].concat($scope.rowCollection);

            $scope.displayedPages = result.length / $scope.itemsByPage;

        }, function (error) {
            alert(error.message);
        });
    });
}
