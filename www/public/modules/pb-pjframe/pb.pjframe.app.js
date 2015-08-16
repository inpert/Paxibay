
//var existingPoliciesDirective = require('./directives/pb.capital.table.directive.js');

angular.module('pb.pjframeModule', [])
    .config(require('./pb.pjframe.routes.js'))
    .controller('pbPjframeController', require('./pb.pjframe.controller.js'))
    .factory('pbPjframeService', require('./pb.pjframe.service.js'));
