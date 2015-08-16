var settingsDirective = require('./directives/pb.settings.content.directive.js');

angular.module('pb.settingsModule', [])
    .config(require('./pb.settings.routes.js'))
    .controller('pbSettingsController', require('./pb.settings.controller.js'))
    .factory('pbSettingsService', require('./pb.settings.service.js'))
    .directive('pbSettingsContentDirective', settingsDirective.directive)
    .controller('pbSettingsContentController', settingsDirective.controller);


