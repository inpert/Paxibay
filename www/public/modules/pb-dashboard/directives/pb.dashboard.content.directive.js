module.exports = {
    directive: ['pbDashboardService', pbDashboardContentDirective],
    controller: ['$scope', '$http', '$location', 'pbDashboardService', pbDashboardContentController]
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
function pbDashboardContentController($scope, $http, $location, pbDashboardService) {
 
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

    $scope.$watch('vm.activeProduct.scale', function (scale) {
        for (var i = 0; i < vm.project.period; i++) {
            vm.project.scales[i].scale[1] = scale;
        }
    });

    $scope.$watch('vm.activeProduct.price', function (price) {
        for (var i = 0; i < vm.project.period; i++) {
            vm.project.scales[i].price[1] = price;
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

        var year = 2004;
        for (var i = 0; i < vm.project.period; i++) {
            if (year.toString() == vm.project.start) {
                vm.project.scales[i].year = year.toString() + " (start year)";
            }
            else {
                vm.project.scales[i].year = year.toString();
            }
            year++;
        }
    });

    pbDashboardService.get().then(function (data) {
        vm.projects = data;
    });

    vm.updateProject = function () {
        pbDashboardService.set(vm.projects);
    };
}




//var app = angular.module('myApp', []);

///* $http ajax calls really belongs in a service, 
//but I'll be using them inside the controller for this demo */

//app.controller('myCtrl', function ($scope, $http) {
//    /*$http.get('path/to/json').then(function(data) {
//      $scope.languages = data;
//    });*/
//    //inputting json directly for this example
//    $scope.languages = [
//      { name: "English", value: 0 },
//      { name: "Spanish", value: 1 },
//      { name: "German", value: 3 },
//      { name: "Russian", value: 2 },
//      { name: "Korean", value: 1 }
//    ];
//    $scope.save = function () {
//        /*$http.post('path/to/server/file/to/save/json', $scope.languages).then(function(data) {
//          $scope.msg = 'Data saved';
//        });*/
//        $scope.msg = 'Data sent: ' + JSON.stringify($scope.languages);
//    };
//});
