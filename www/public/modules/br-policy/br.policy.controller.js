module.exports = ['$scope', 'brPolicyService', brPolicyController];

function brPolicyController($scope, brPolicyService) {
  var vm = this; 
  vm.title = 'My Policy List';
  //$scope.title = 'My Policy List';
}