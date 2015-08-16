
var depreciationContentDirective = require('./directives/pb.depreciation.content.directive.js');

angular.module('pb.depreciationModule', [])
    .config(require('./pb.depreciation.routes.js'))
    .controller('pbDepreciationController', require('./pb.depreciation.controller.js'))
    .factory('pbDepreciationService', require('./pb.depreciation.service.js'))
    .directive('pbDepreciationContentDirective', depreciationContentDirective.directive)
    .controller('pbDepreciationContentController', depreciationContentDirective.controller);
