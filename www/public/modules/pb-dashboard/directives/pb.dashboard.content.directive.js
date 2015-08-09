module.exports = {
    directive: ['pbDashboardService', pbDashboardContentDirective],
    controller: ['$scope', 'pbDashboardService', pbDashboardContentController]
};

function pbDashboardContentDirective(pbDashboardService) {

  return {
    restrict: 'EA',
    replace: true,
    scope: {
      details: '='
    },
    controller: 'pbDashboardContentController as vm',
    templateUrl: "./modules/pb-dashboard/directives/pb.dashboard.content.tmpl.html",
    link: function(scope, element, attrs, vm) {

    }
  };
}

function pbDashboardContentController($scope, pbDashboardService) {
 
    var vm = this;
    vm.titile = 'this vm directive title';
    vm.productCount = 'Product Quantity:';
    $scope.qty;
    vm.project = {};
    
    vm.tabs = [];
    $scope.$watch('qty', function (qty) {
        vm.tabs = [];
        for (var i = 1; i < qty + 1; i++) {
            vm.tabs.push({
                title: "title" + i,
                name: "profile" + i,
                active: false,
                content: "./modules/pb-dashboard/directives/pb.dashboard.content.tabs.tmpl.html"
            });
        }
    });

    vm.activateTab = function () {
        var str = 'this is testing';
    };


    pbDashboardService.getProducts().$promise.then(function (data) {
        vm.project = data
        $scope.qty = vm.project[0].products.length;
    });
}
