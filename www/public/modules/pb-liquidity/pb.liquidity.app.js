
var liquidityContentDirective = require('./directives/pb.liquidity.content.directive.js');

angular.module('pb.liquidityModule', [])
    .config(require('./pb.liquidity.routes.js'))
    .controller('pbLiquidityController', require('./pb.liquidity.controller.js'))
    .factory('pbLiquidityService', require('./pb.liquidity.service.js'))
    .directive('pbLiquidityContentDirective', liquidityContentDirective.directive)
    .controller('pbLiquidityContentController', liquidityContentDirective.controller);
