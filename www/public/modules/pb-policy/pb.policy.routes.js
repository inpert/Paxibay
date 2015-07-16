var config = require('../core/core.config.js')[0]();

module.exports = ['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/policy', {
        controller: 'pbPolicyController as vm',
        templateUrl: config.path() + '/modules/pb-policy/pb.policy.tmpl.html'
    });
}];