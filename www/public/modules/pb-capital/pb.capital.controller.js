module.exports = ['$scope', 'pbCapitalService', pbCapitalController]; // 'pbCapitalService', 

function pbCapitalController($scope, pbCapitalService) {
  var vm = this; 
  vm.title = 'My capital List';
}