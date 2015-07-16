var config = require('../core/core.config.js')[0]();

module.exports = ['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/loans', {
        controller: 'pbLoansController as vm',
        templateUrl: config.path() + '/modules/pb-loans/pb.loans.tmpl.html'
    });
}];
