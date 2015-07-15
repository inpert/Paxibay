var notificationDirectives = require('./directives/br.notification.directive.js');

angular.module('br.notificationModule', [])
    .config(require('./br.notification.routes.js'))
    .controller('brNotificationController', require('./br.notification.controller.js'))
    .factory('brNotificationService', require('./br.notification.service.js'))
    .directive('brNotifications', notificationDirectives.directive)
    .controller('brNotificationsController', notificationDirectives.controller);
