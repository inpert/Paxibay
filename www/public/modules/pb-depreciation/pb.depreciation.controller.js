module.exports = ['$scope', 'pbDepreciationService', pbDepreciationController];

function pbDepreciationController($scope, pbDepreciationService) {
  var vm = this; 
  vm.title = 'Depreciation';
}