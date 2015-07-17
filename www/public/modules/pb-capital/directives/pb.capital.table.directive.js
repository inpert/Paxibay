module.exports = {
    directive: ['pbCapitalService', pbCapitalExistingDirective],
    controller: ['$scope', 'pbCapitalService', '$http', pbCapitalExistingController]
};

function pbCapitalExistingDirective(pbCapitalService) {

    return {
        restrict: 'EA',
        replace: true,
        scope: {
            details: '='
        },
        controller: 'pbCapitalExistingController as vm',
        templateUrl: './modules/pb-capital/directives/pb.capital.table.tmpl.html',
        link: function (scope, element, attrs, vm) {

        }
    };
}

function pbCapitalExistingController($scope, pbCapitalService, $http) {
    var vm = this;
    vm.title = 'this is dirctive title';

    var baseUrl = '/modules/pb-capital/project.json';
    vm.listProducts = function () {
        $http.get(baseUrl).success(function (data) {
            vm.projects = data;
        });
    };
}

function brExistingPoliciesPageSelect() {
    return {
        restrict: 'E',
        template: '{{inputPage}}',
        // template: '<input type="text" class="select-page" ng-model="inputPage" ng-change="selectPage(inputPage)">',
        link: function (scope, element, attrs) {
            scope.$watch('currentPage', function (c) {
                scope.inputPage = c;
            });
        }
    };
}