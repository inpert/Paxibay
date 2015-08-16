
//var existingPoliciesDirective = require('./directives/pb.capital.table.directive.js');

angular.module('pb.depreciationModule', [])
    .config(require('./pb.depreciation.routes.js'))
    .controller('pbDepreciationController', require('./pb.depreciation.controller.js'))
    .factory('pbDepreciationService', require('./pb.depreciation.service.js'));
