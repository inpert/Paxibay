var config = require('../core/core.config.js')[0]();

module.exports = ['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/view2', {
        controller: 'view2Controller as vm',
        //templateUrl: 'modules/view2/view2.html',
        templateUrl: config.path() + '/modules/view2/view2.html'
    });
}];