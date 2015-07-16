module.exports = {
    directive: ['pbDashboardService', pbDashboardSearchDirective],
    controller: ['$scope', 'pbDashboardService', pbDashboardSearchController]
};

/*
 * @name: welcomeSearch
 * @example <welcome-search></welcome-search>
 */
function pbDashboardSearchDirective(coreConfig, pbDashboardService) {

    return {
        restrict: 'EC',
        scope: true,
        controller: 'pbDashboardSearchController as vm',
        templateUrl: './modules/pb-dashboard/directives/pb.dashboard.search.directive.tmpl.html',
        replace: true,
        link: function (scope, element, attrs, vm) {

        }
    };
}

function pbDashboardSearchController($scope, pbDashboardService) {

}
