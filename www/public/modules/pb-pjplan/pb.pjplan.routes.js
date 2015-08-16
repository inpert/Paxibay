var config = require('../core/core.config.js')[0]();

module.exports = ['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/pjplan', {
        controller: 'pbPjplanController as vm',
        templateUrl: config.path() + '/modules/pb-pjplan/pb.pjplan.tmpl.html'
    });
}];
