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

// Directive Controller
function pbDashboardContentController($scope, pbDashboardService) {
 
    var vm = this;
    vm.titile = 'this vm directive titleaa';
    vm.productCount = 'Product Quantity:';
    vm.qtyInitial = 0;
    $scope.qty = 0;
    vm.project = {};
    vm.activeProduct = {};
    

    vm.tabs = [];
    $scope.$watch('qty', function (qty) {
        vm.tabs = [];
        for (var i = 0; i < qty; i++) {
            vm.tabs.push({
                code: vm.project.products[i].code,
                title: vm.project.products[i].title,
                content: vm.project.content_link
            });
        }
    });

    vm.activateTab = function (code) {
        vm.activeProduct = vm.project.products.filter(function (tab) {
            return tab.code == code;
        })[0];

        console.log(vm.activeProduct.title);
    };

    pbDashboardService.getProducts().$promise.then(function (data) {
        vm.project = data[0];
        $scope.qty = vm.project.products_amount;
        vm.qtyInitial = $scope.qty;
        vm.activeProduct = vm.project.products[0];

        $scope.unitOptions = [
            { 'lookupCode': 'thousand', 'description': 'thousand' },
            { 'lookupCode': 'hundred', 'description': 'hundred' }
        ];

        $scope.symbolOptions = [
            { 'lookupCode': 'ton1', 'description': 'ton1' },
            { 'lookupCode': 'ton2', 'description': 'ton2' }
        ];

    });
}
