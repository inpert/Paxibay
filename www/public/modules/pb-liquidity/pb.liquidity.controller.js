module.exports = ['$scope', 'pbLiquidityService', pbLiquidityController];

function pbLiquidityController($scope, pbLiquidityService) {
  var vm = this; 
  vm.title = 'Liquidity Panel';
}