module.exports = ['$scope', 'pbTaxesService', pbTaxesController];

function pbTaxesController($scope, pbTaxesService) {
  var vm = this; 
  vm.title = 'Taxes Panel';
}