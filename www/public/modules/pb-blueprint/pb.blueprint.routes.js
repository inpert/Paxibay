var config = require('../core/core.config.js')[0]();

module.exports = ['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/dashboard', {
        controller: 'pbDashboardController as vm',
        templateUrl: config.path() + '/modules/pb-dashboard/pb.dashboard.tmpl.html'
    });
}];
