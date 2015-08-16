var config = require('../core/core.config.js')[0]();

module.exports = ['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/pjframe', {
        controller: 'pbPjframeController as vm',
        templateUrl: config.path() + '/modules/pb-pjframe/pb.pjframe.tmpl.html'
    });
}];