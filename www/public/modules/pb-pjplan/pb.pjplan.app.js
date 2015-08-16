
var pjplanContentDirective = require('./directives/pb.pjplan.content.directive.js');

angular.module('pb.pjplanModule', [])
    .config(require('./pb.pjplan.routes.js'))
    .controller('pbPjplanController', require('./pb.pjplan.controller.js'))
    .factory('pbPjplanService', require('./pb.pjplan.service.js'))
    .directive('pbPjplanContentDirective', pjplanContentDirective.directive)
    .controller('pbPjplanContentController', pjplanContentDirective.controller);
