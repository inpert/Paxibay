var config = require('../core/core.config.js')[0]();

module.exports = ['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/policy', {
        controller: 'brPolicyController as vm',
        templateUrl: config.path() + '/modules/br-policy/br.policy.tmpl.html'
    });
}];