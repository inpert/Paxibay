
//var existingPoliciesDirective = require('./directives/pb.capital.table.directive.js');

angular.module('pb.dashboardModule', [])
    .config(require('./pb.dashboard.routes.js'))
    .controller('pbDashboardController', require('./pb.dashboard.controller.js'))
    .factory('pbDashboardService', require('./pb.dashboard.service.js'));
