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
    vm.titile = 'this vm directive titleaa';
    vm.productCount = 'Product Quantity:';
    vm.qtyInitial = 0;
    $scope.qty = 0;
    vm.project = {};
    vm.activeProduct = {};
    

    vm.tabs = [];
    $scope.$watch('qty', function (qty) {

        vm.tabs = [];

        if (qty <= vm.qtyInitial) {
            for (var i = 0; i < qty; i++) {
                vm.tabs.push({
                    title: vm.project.products[i].product_id,
                    name: vm.project.products[i].name,
                    scale: vm.project.products[i].scale,
                    unit: vm.project.products[i].unit,
                    symbol: vm.project.products[i].symbol,
                    price: vm.project.products[i].price,
                    content: vm.project.products[i].content
                });
            }
        }
        else {

            for (var j = 0; j < vm.qtyInitial; j++) {
                vm.tabs.push({
                    title: vm.project.products[j].product_id,
                    name: vm.project.products[j].name,
                    scale: vm.project.products[j].scale,
                    unit: vm.project.products[j].unit,
                    symbol: vm.project.products[j].symbol,
                    price: vm.project.products[j].price,
                    content: vm.project.products[j].content
                });
            }

            for (var k = vm.qtyInitial + 1; k <= qty; k++) {
                var newProduct = {
                    title: 'Product ' + k,
                    name: 'Product ' + k,
                    scale: 100,
                    unit: 'handred',
                    symbol: 'ton',
                    price: 110,
                    content: "./modules/pb-dashboard/directives/pb.dashboard.content.tabs.tmpl.html"
                };

                vm.tabs.push(newProduct);
                vm.project.products.push(newProduct);
            }
        }

       
        
    });

    vm.activateTab = function (name) {
        vm.activeProduct = vm.project.products.filter(function (tab) {
            return tab.name == name;
        })[0];

        //$scope.unitOptions = [{ name: "thousand", id: "thousand" }, { name: "hundred", id: "hundred" }];
        //$scope.selectedUnitOption = vm.activeProduct.unit;
        //$scope.selectedUnitOption = $scope.unitOptions[1];

        console.log(vm.activeProduct.name);
    };

    pbDashboardService.getProducts().$promise.then(function (data) {
        vm.project = data[0];
        $scope.qty = vm.project.products.length;
        vm.qtyInitial = $scope.qty;
        vm.activeProduct = vm.project.products[0];

        //$scope.unitOptions = [{ name: "thousand" }, { name: "hundred" }];

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
