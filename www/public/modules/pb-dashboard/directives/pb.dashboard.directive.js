module.exports = {
    directive: ['pbDashboardService', pbDashboardDirective],
    controller: ['$scope', 'pbDashboardService', pbDashboardController]
};

function pbDashboardDirective(pbDashboardService) {

  return {
    restrict: 'EA',
    replace: true,
    scope: {
      details: '='
    },
    controller: 'pbDashboardController',
    templateUrl: "./modules/pb-dashboard/directives/pb.dashboard.tmpl.html",
    link: function(scope, element, attrs, vm) {

    }
  };
}

function pbDashboardController($scope, pbDashboardService) {
 
}
