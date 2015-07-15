
var existingPoliciesDirective = require('./directives/pb.settings.table.directive.js');

angular.module('pb.settingsModule', [])
    .config(require('./pb.settings.routes.js'))
    .controller('pbSettingsController', require('./pb.settings.controller.js'))
    .factory('pbSettingsService', require('./pb.settings.service.js'));
