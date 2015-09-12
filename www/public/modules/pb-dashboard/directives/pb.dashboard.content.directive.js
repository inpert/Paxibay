module.exports = {
    directive: ['pbDashboardService', pbDashboardContentDirective],
    controller: ['$scope', '$rootScope', '$http', '$location', 'pbDashboardService', pbDashboardContentController]
};

function pbDashboardContentDirective(pbDashboardService) {

  return {
    restrict: 'EA',
    replace: true,
    scope: {
      details: '='
    },
    controller: 'pbDashboardContentController as vm',
    templateUrl: "./modules/pb-dashboard/directives/pb.dashboard.content.tmpl.html",
    link: function(scope, element, attrs, vm) {

    }
  };
}

// Directive Controller
function pbDashboardContentController($scope, $rootScope, $http, $location, pbDashboardService) {
    //$rootScope.$broadcast('scrollTop');
    var vm = this;

    // attributes
    vm.blueprint = {};

    vm.projectCount = 'Project Count:';

    $scope.qty = 0;
    vm.project = {};
    vm.activeProduct = {};
    vm.activeProject = {};
    vm.tabs = [];
    vm.valuatorPromise = null;

    // urls for ng-include
    vm.tabURL = './modules/pb-dashboard/directives/pb.dashboard.content.tabs.tmpl.html';

    // methods and events
    vm.activateTab = activateTab;
    vm.getScales = getScales;
    vm.updateProject = updateProject;
    vm.createValuator = createValuator;


    $scope.$watch('qty', adjustProjectTags);
    $scope.$watch('onScaleChange', scaleChangeHandler);
    $scope.$watch('onPriceChange', priceChangeHandler);
   

    //$scope.$on('refreshController', init);

    init();

    function init() {

        vm.blueprint = $rootScope.currentValuator.metadata.blueprint;
        console.log(vm.blueprint);

        $scope.qty = vm.blueprint.settings.count;
        vm.activeProject = vm.blueprint.projects[0];

        vm.unitOptions = [
           { 'lookupCode': 'thousand', 'description': 'thousand' },
           { 'lookupCode': 'hundred', 'description': 'hundred' }
        ];

        vm.symbolOptions = [
            { 'lookupCode': 'ton1', 'description': 'ton1' },
            { 'lookupCode': 'ton2', 'description': 'ton2' }
        ];

        if (vm.blueprint.scales.length == 0) {
            vm.getScales()
        }


        //vm.valuatorPromise = pbDashboardService.getValuators();
        //pbDashboardService.deleteValuator();
    }

    function getScales() {
        console.log(vm.blueprint.scales.length);

        var year = 2004;
        for (var i = 0; i < vm.blueprint.settings.period; i++) {
            //if (year.toString() == vm.blueprint.settings.startYear) {
            //    vm.blueprint.scales[i].year = year.toString() + " (start year)";
            //}
            //else {
            //    vm.blueprint.scales[i].year = year.toString();
            //}

            //vm.blueprint.scales[i].year = year.toString();
            //year++;
        }
    }
    //============================================= 

    function createValuator() {
        vm.valuatorPromise = pbDashboardService.createValuator();

        //==================================
        vm.valuatorPromise.then(
            function (result) {
                console.log('Success!', result);
            }, function (error) {
                console.log('Failure...', error);
            }
        );
    }
    

    function getValuator() {
        vm.valuatorPromise.then(
            function (result) {
                vm.valuatorInstance = result;

                console.log('Success!', result);
            }, function (error) {
                console.log('Failure...', error);
            }
        );
    }

    function updateProject() {
        vm.blueprint.projects = [
            { "code": "01", "title": "Product 1", "name": "Product 1", "scale": 100, "unit": "hundred", "symbol": "ton1", "price": 110 },
            { "code": "02", "title": "Product 2", "name": "Product 2", "scale": 200, "unit": "hundred", "symbol": "ton2", "price": 120 }
        ];

        $rootScope.currentValuator.metadata.projects = vm.blueprint;
        pbDashboardService.updateValuator($rootScope.currentValuator);
    }


    function activateTab(code) {
        vm.activeProject = vm.blueprint.projects.filter(function (tab) {
            return tab.code == code;
        })[0];

        console.log(vm.activeProject.title);
    }

    //============================================
    $scope.$watch('vm.activeProduct.scale', function (scale) {
        for (var i = 0; i < vm.project.period; i++) {
            vm.project.scales[i].scale[1] = scale;
        }
    });

    $scope.$watch('vm.activeProduct.price', function (price) {
        for (var i = 0; i < vm.project.period; i++) {
            vm.project.scales[i].price[1] = price;
        }
    });

    function scaleChangeHandler(scale) {

    }

    function priceChangeHandler(price) {

    }

    function adjustProjectTags(qty) {
        vm.tabs = [];

        for (var i = 0; i < qty; i++) {
            vm.tabs.push({
                code: vm.blueprint.projects[i].code,
                title: vm.blueprint.projects[i].title,
                content: vm.tabURL
            });
        }
    }

    function onCountChange() {
        return vm.count;
    }
}
