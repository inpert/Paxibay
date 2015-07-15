module.exports = {
  directive: ['coreConfig', 'brNotificationService', brNotificationsDirective],
  controller: ['$scope', 'brNotificationService', brNotificationsController]
};

function brNotificationsDirective(coreConfig, brNotificationService) {

    return {
        restrict: 'EA',
        replace: true,
        scope: {
            details: '='
        },
        controller: 'brNotificationsController',
        templateUrl: coreConfig.path() + "/modules/br-notification/directives/br.notification.tmpl.html",
        link: function (scope, element, attrs, vm) {

        }
    };
}

function brNotificationsController($scope, brNotificationService) {
 
}
