module.exports = ['$scope', 'pbCostService', pbCostController];

function pbCostController($scope, pbCostService) {
  var vm = this; 
  vm.title = 'My Cost List';
  vm.value = 2;
  vm.tabActivity = [true, false];
}