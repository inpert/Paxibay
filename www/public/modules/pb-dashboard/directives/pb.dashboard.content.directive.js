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
    $scope.qty = 0;
    vm.project = {};
    
    vm.tabs = [];
    $scope.$watch('qty', function (qty) {
        vm.tabs = [];
        for (var i = 0; i < qty; i++) {

            vm.tabs.push({
                title: vm.project.products[i].name,
                name: vm.project.products[i].name,
                active: false,
                content: "./modules/pb-dashboard/directives/pb.dashboard.content.tabs.tmpl.html"
            });

        }
    });

    vm.activateTab = function () {
        var str = 'this is testing';
    };


    pbDashboardService.getProducts().$promise.then(function (data) {
        vm.project = data[0];
        $scope.qty = vm.project.products.length;
    });
}
