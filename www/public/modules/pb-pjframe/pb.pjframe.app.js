
var pjframeContentDirective = require('./directives/pb.pjframe.content.directive.js');

angular.module('pb.pjframeModule', [])
    .config(require('./pb.pjframe.routes.js'))
    .controller('pbPjframeController', require('./pb.pjframe.controller.js'))
    .factory('pbPjframeService', require('./pb.pjframe.service.js'))
    .directive('pbPjframeContentDirective', pjframeContentDirective.directive)
    .controller('pbPjframeContentController', pjframeContentDirective.controller);
