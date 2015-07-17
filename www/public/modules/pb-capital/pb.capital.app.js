
var existingcapitalDirective = require('./directives/pb.capital.table.directive.js');

angular.module('pb.capitalModule', [])
    .config(require('./pb.capital.routes.js'))
    .controller('pbCapitalController', require('./pb.capital.controller.js'))
    .factory('pbCapitalService', require('./pb.capital.service.js'))
    .directive('pbCapitalExisting', existingcapitalDirective.directive)
    .controller('pbCapitalExistingController', existingcapitalDirective.controller);
