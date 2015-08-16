
var pjloansContentDirective = require('./directives/pb.pjloans.content.directive.js');

angular.module('pb.pjloansModule', [])
    .config(require('./pb.pjloans.routes.js'))
    .controller('pbPjloansController', require('./pb.pjloans.controller.js'))
    .factory('pbPjloansService', require('./pb.pjloans.service.js'))
    .directive('pbPjloansContentDirective', pjloansContentDirective.directive)
    .controller('pbPjloansContentController', pjloansContentDirective.controller);
