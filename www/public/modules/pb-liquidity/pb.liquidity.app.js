
//var existingPoliciesDirective = require('./directives/pb.capital.table.directive.js');

angular.module('pb.liquidityModule', [])
    .config(require('./pb.liquidity.routes.js'))
    .controller('pbLiquidityController', require('./pb.liquidity.controller.js'))
    .factory('pbLiquidityService', require('./pb.liquidity.service.js'));
