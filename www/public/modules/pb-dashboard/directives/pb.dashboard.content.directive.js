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
    vm.projectCount = 'Project Count:';

    $scope.qty = 0;
    vm.project = {};
    vm.activeProduct = {};
    vm.activeProject = {};
    vm.blueprintInstance = {};

    vm.tabs = [];
    vm.valuatorPromise = null;


    // urls for ng-include


    // methods and events
    vm.activateTab = activateTab;
    vm.getProjects = getProjects;
    vm.updateProject = updateProject;
    vm.createValuator = createValuator;


    //$scope.$watch('vm.blueprintInstance.settings.count', adjustProjectTags);

    //$scope.$watch('qty', adjustProjectTags);
    $scope.$watch('onScaleChange', scaleChangeHandler);
    $scope.$watch('onPriceChange', priceChangeHandler);
   

    //$scope.$on('refreshController', init);

    init();

    function init() {

        vm.blueprintInstance = $rootScope.currentValuator.metadata.blueprint;
        console.log(vm.blueprintInstance);


        //$scope.qty = vm.blueprintInstance.settings.count;

        getProducts();

        //getProjects();


        //vm.valuatorPromise = pbDashboardService.getValuators();
        //pbDashboardService.deleteValuator();
        //getProducts();
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
        vm.blueprintInstance.projects = [
            { "code": "01", "title": "Product 1", "name": "Product 1", "scale": 100, "unit": "hundred", "symbol": "ton1", "price": 110 },
            { "code": "02", "title": "Product 2", "name": "Product 2", "scale": 200, "unit": "hundred", "symbol": "ton2", "price": 120 }
        ];

        $rootScope.currentValuator.metadata.projects = vm.blueprintInstance;
        pbDashboardService.updateValuator($rootScope.currentValuator);
    }


    function activateTab(code) {
        vm.activeProduct = vm.project.products.filter(function (tab) {
            return tab.code == code;
        })[0];

        console.log(vm.activeProduct.title);
    }


    //============================================
    $scope.$watch('qty', function (qty) {
        vm.tabs = [];
        for (var i = 0; i < qty; i++) {
            vm.tabs.push({
                code: vm.project.products[i].code,
                title: vm.project.products[i].title,
                content: vm.project.content_link
            });
        }
    });    

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

    function adjustProjectTags(count) {
        vm.tabs = [];
        for (var i = 0; i < count; i++) {
            vm.tabs.push({
                code: (i + 1).toString(),
                title: 'title' + (i+1),
                content: 'aaaa'
            });
        }


        //for (var i = 0; i < count; i++) {
        //    vm.tabs.push({
        //        code: vm.blueprintInstance.projects[i].code,
        //        title: vm.blueprintInstance.projects[i].title,
        //        content: './modules/pb-dashboard/directives/pb.dashboard.content.tabs.tmpl.html'
        //    });
        //}
    }

    function onCountChange() {
        return vm.count;
    }

    function getProducts() {
        pbDashboardService.getProducts().then(function (data) {
            vm.project = data[0];

            $scope.qty = vm.project.products_amount;
            vm.activeProduct = vm.project.products[0];

            $scope.unitOptions = [
                { 'lookupCode': 'thousand', 'description': 'thousand' },
                { 'lookupCode': 'hundred', 'description': 'hundred' }
            ];

            $scope.symbolOptions = [
                { 'lookupCode': 'ton1', 'description': 'ton1' },
                { 'lookupCode': 'ton2', 'description': 'ton2' }
            ];

            var year = 2004;
            for (var i = 0; i < vm.project.period; i++) {
                if (year.toString() == vm.project.start) {
                    vm.project.scales[i].year = year.toString() + " (start year)";
                }
                else {
                    vm.project.scales[i].year = year.toString();
                }
                year++;
            }
        });
    }
    
    function getProjects() {

        //vm.projectInstance;
        // "settings": { "products_amount": 2, "period": 30, "start": "2004", "initial": true, "content_link": "./modules/pb-dashboard/directives/pb.dashboard.content.tabs.tmpl.html" },

        vm.activeProject = vm.blueprintInstance.projects[0];

        $scope.unitOptions = [
            { 'lookupCode': 'thousand', 'description': 'thousand' },
            { 'lookupCode': 'hundred', 'description': 'hundred' }
        ];

        $scope.symbolOptions = [
            { 'lookupCode': 'ton1', 'description': 'ton1' },
            { 'lookupCode': 'ton2', 'description': 'ton2' }
        ];

        //var year = 2004;
        //for (var i = 0; i < vm.project.period; i++) {
        //    if (year.toString() == vm.project.start) {
        //        vm.project.scales[i].year = year.toString() + " (start year)";
        //    }
        //    else {
        //        vm.project.scales[i].year = year.toString();
        //    }
        //    year++;
        //}
    }
}
