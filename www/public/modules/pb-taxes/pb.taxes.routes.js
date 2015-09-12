var config = require('../core/core.config.js')[0]();

module.exports = ['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/taxes', {
        controller: 'pbTaxesController as vm',
        templateUrl: config.path() + '/modules/pb-taxes/pb.taxes.tmpl.html'
    });
}];
