
//var existingPoliciesDirective = require('./directives/pb.capital.table.directive.js');

angular.module('pb.pjplanModule', [])
    .config(require('./pb.pjplan.routes.js'))
    .controller('pbPjplanController', require('./pb.pjplan.controller.js'))
    .factory('pbPjplanService', require('./pb.pjplan.service.js'));
