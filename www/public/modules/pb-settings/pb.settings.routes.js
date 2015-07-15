var config = require('../core/core.config.js')[0]();

module.exports = ['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/settings', {
        controller: 'pbCapitalController as vm',
        templateUrl: config.path() + '/modules/pb-settings/pb.settings.tmpl.html'
    });
}];
