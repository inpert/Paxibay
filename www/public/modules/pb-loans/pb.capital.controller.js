module.exports = ['$scope', 'brPolicyService', brPolicyController];

function brPolicyController($scope, brPolicyService) {
  var vm = this; 
  vm.title = 'My Policy List';
}