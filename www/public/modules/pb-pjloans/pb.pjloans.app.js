
//var existingPoliciesDirective = require('./directives/pb.capital.table.directive.js');

angular.module('pb.pjloansModule', [])
    .config(require('./pb.pjloans.routes.js'))
    .controller('pbPjloansController', require('./pb.pjloans.controller.js'))
    .factory('pbPjloansService', require('./pb.pjloans.service.js'));
