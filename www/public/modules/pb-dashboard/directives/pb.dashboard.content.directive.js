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
    vm.activeProject = {};
    vm.tabs = [];

    vm.projectCount = 'Project Count:';

    // urls for ng-include
    vm.tabURL = './modules/pb-dashboard/directives/pb.dashboard.content.tabs.tmpl.html';

    // methods and events
    vm.activateTab = activateTab;
    vm.getScales = getScales;
    vm.updateProject = updateProject;
    vm.createValuator = createValuator;
    vm.activeScale = activeScale;


    $scope.$watch('vm.blueprint.settings.count', adjustProjectTags);
    $scope.$watch('onScaleChange', scaleChangeHandler);
    $scope.$watch('onPriceChange', priceChangeHandler);
   

    //$scope.$on('refreshController', init);

    init();

    function init() {

        vm.blueprint = $rootScope.currentValuator.metadata.blueprint;
        console.log(vm.blueprint);

        vm.activeProject = vm.blueprint.projects[0];

        vm.unitOptions = [
           { 'lookupCode': 'thousand', 'description': 'thousand' },
           { 'lookupCode': 'hundred', 'description': 'hundred' }
        ];

        vm.symbolOptions = [
            { 'lookupCode': 'ton1', 'description': 'ton1' },
            { 'lookupCode': 'ton2', 'description': 'ton2' }
        ];

        if (vm.blueprint.scales.length === 0) {
            vm.getScales();
        }
    }

    function getScales() {
        console.log(vm.blueprint.scales.length);

        // leadtime 投产准备期
        // trial period
        var startYear = 2014;
        var trialPeriod = startYear + 2;
        var fullScales = startYear + 4;

        var year = startYear;
        for (var i = 0; i < vm.blueprint.settings.period; i++) {
            vm.blueprint.scales[i] = { year: year, scale: [100, 0, 0, 0, 0, 0, 0, 0, 0], price: [110, 0, 0, 0, 0, 0, 0, 0, 0] };
            year++;
        }

        //for (var i = vm.blueprint.projects.length; i > 1; i--) {
        //    vm.blueprint.projects.pop(vm.blueprint.projects[i]);
        //}

        for (var j = 1; j < 9; j++) {
            var project = { "code": "0" + (j + 1), "title": "project " + (j + 1), "name": "project " + (j + 1), "scale": 0, "unit": "hundred", "symbol": "ton1", "price": 0 };
            vm.blueprint.projects.push(project);
        }

        vm.updateProject();
    }
    //============================================= 

    function createValuator() {
        var valuatorPromise = pbDashboardService.createValuator();

        //==================================
        valuatorPromise.then(
            function (result) {
                console.log('Success!', result);
            }, function (error) {
                console.log('Failure...', error);
            }
        );
    }

    function updateProject() {
        pbDashboardService.updateValuator($rootScope.currentValuator);
    }

    function activeScale(row) {
        var codeNumber = parseInt(vm.activeProject.code);
        return codeNumber - 1;
    }
   
    function activateTab(code) {
        vm.activeProject = vm.blueprint.projects.filter(function (tab) {
            return tab.code == code;
        })[0];

        console.log(vm.activeProject.title);
    }

    ////============================================
    //$scope.$watch('vm.activeProduct.scale', function (scale) {
    //    for (var i = 0; i < vm.project.period; i++) {
    //        vm.project.scales[i].scale[1] = scale;
    //    }
    //});

    //$scope.$watch('vm.activeProduct.price', function (price) {
    //    for (var i = 0; i < vm.project.period; i++) {
    //        vm.project.scales[i].price[1] = price;
    //    }
    //});

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

        vm.updateProject();
    }

    function onCountChange() {
        return vm.count;
    }
}
