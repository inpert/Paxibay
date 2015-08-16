var config = require('../core/core.config.js')[0]();

module.exports = ['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/depreciation', {
        controller: 'pbDepreciationController as vm',
        templateUrl: config.path() + '/modules/pb-depreciation/pb.depreciation.tmpl.html'
    });
}];
