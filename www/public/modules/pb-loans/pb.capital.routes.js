var config = require('../core/core.config.js')[0]();

module.exports = ['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/capital', {
        controller: 'pbCapitalController as vm',
        templateUrl: config.path() + '/modules/pb-capital/pb.capital.tmpl.html'
    });
}];
