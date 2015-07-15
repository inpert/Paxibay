var config = require('../core/core.config.js')[0]();

module.exports = ['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/notification', {
        controller: 'brNotificationController as vm',
        templateUrl: config.path() + '/modules/br-notification/br.notification.tmpl.html'
    });
}];