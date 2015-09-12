module.exports = ['$scope', '$http', 'pbDashboardService', pbDashboardController];

function pbDashboardController($scope, $http, pbDashboardService) {

    var vm = this;
    vm.title = 'Dashboard Product';
    //vm.promise = null;

    //vm.newValuator = newValuator;
    //vm.removeValuator = removeValuator;

    //init();

    //function init() {
    //    vm.promise = pbDashboardService.createValuator();
    //}

    //function newValuator() {
    //    vm.promise.then(
    //        function (result) {
    //            console.log('Success!', result);
    //        }, function (error) {
    //            console.log('Failure...', error);
    //        }
    //    );
    //}

    //function removeValuator(valuator) {
    //    pbDashboardService.deleteValuator(valuator);
    //}
}
