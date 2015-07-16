module.exports = ['$scope', 'pbPolicyService', pbPolicyController];

function pbPolicyController($scope, pbPolicyService) {
  var vm = this; 
  vm.title = 'My Policy List';
  //$scope.title = 'My Policy List';
}