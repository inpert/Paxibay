module.exports = {
    directive: ['pbLiquidityService', pbLiquidityContentDirective],
    controller: ['$scope', 'pbLiquidityService', pbLiquidityContentController]
};

function pbLiquidityContentDirective(pbLiquidityService) {

  return {
    restrict: 'EA',
    replace: true,
    scope: {
      details: '='
    },
    controller: 'pbLiquidityContentController as vm',
    templateUrl: '/modules/pb-liquidity/directives/pb.liquidity.content.tmpl.html',
    link: function(scope, element, attrs, vm) {

      //scope.paginationTemplateUrl = coreConfig.path() + '/modules/br-policy/directives/br.custom.pagination.tmpl.html';

    }
  };
}



function pbLiquidityContentController($scope, pbLiquidityService) {
    var vm = this;
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