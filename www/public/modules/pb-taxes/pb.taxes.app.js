
var taxesContentDirective = require('./directives/pb.taxes.content.directive.js');

angular.module('pb.taxesModule', [])
    .config(require('./pb.taxes.routes.js'))
    .controller('pbTaxesController', require('./pb.taxes.controller.js'))
    .factory('pbTaxesService', require('./pb.taxes.service.js'))
    .directive('pbTaxesContentDirective', taxesContentDirective.directive)
    .controller('pbTaxesContentController', taxesContentDirective.controller);
