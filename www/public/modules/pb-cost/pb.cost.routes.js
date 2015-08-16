var config = require('../core/core.config.js')[0]();

module.exports = ['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/cost', {
        controller: 'pbCostController as vm',
        templateUrl: config.path() + '/modules/pb-cost/pb.cost.tmpl.html'
    });
}];
