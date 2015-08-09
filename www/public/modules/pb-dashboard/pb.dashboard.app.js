
var dashboardDirective = require('./directives/pb.dashboard.directive.js');
var dashboardContentDirective = require('./directives/pb.dashboard.content.directive.js');
var dashboardSearchDirective = require('./directives/pb.dashboard.search.directive.js');
var dashboardTableDirective = require('./directives/pb.dashboard.table.directive.js');


angular.module('pb.dashboardModule', [])
    .config(require('./pb.dashboard.routes.js'))
    .controller('pbDashboardController', require('./pb.dashboard.controller.js'))
    .factory('pbDashboardService', require('./pb.dashboard.service.js'))
    .directive('pbDashboardContent', dashboardContentDirective.directive)
    .controller('pbDashboardContentController', dashboardContentDirective.controller)
    .directive('pbDashboardSearch', dashboardSearchDirective.directive)
    .controller('pbDashboardSearchController', dashboardSearchDirective.controller)
    .directive('pbDashboardTable', dashboardTableDirective.directive)
    .controller('pbDashboardTableController', dashboardTableDirective.controller);

