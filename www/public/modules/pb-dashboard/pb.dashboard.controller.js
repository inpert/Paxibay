module.exports = ['$scope', '$http', 'pbDashboardService', pbDashboardController];

function pbDashboardController($scope, $http, pbDashboardService) {

    var vm = this;
    vm.title = 'Dashboard Product';
    vm.qty = 1;

    pbDashboardService.getProducts().then(function (data) {
        vm.qty = data[0].qty;
    });
}
