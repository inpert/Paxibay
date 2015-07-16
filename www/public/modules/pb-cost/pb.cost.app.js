
//var existingPoliciesDirective = require('./directives/pb.cost.table.directive.js');

angular.module('pb.costModule', [])
    .config(require('./pb.cost.routes.js'))
    .controller('pbCostController', require('./pb.cost.controller.js'))
    .factory('pbCostService', require('./pb.cost.service.js'));
