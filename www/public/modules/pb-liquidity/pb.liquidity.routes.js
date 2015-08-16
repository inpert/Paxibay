var config = require('../core/core.config.js')[0]();

module.exports = ['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/liquidity', {
        controller: 'pbLiquidityController as vm',
        templateUrl: config.path() + '/modules/pb-liquidity/pb.liquidity.tmpl.html'
    });
}];
