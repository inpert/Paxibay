var config = require('../core/core.config.js')[0]();

module.exports = ['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/pjloans', {
        controller: 'pbPjloansController as vm',
        templateUrl: config.path() + '/modules/pb-pjloans/pb.pjloans.tmpl.html'
    });
}];
