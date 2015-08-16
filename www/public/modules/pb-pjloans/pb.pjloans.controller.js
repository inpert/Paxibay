module.exports = ['$scope', 'pbPjloansService', pbPjloansController];

function pbPjloansController($scope, pbPjloansService) {
  var vm = this; 
  vm.title = 'My Loans List';
}