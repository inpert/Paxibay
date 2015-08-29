module.exports = {
    directive: ['pbDashboardService', pbDashboardContentDirective],
    controller: ['$scope', '$http', '$location', 'pbDashboardService', pbDashboardContentController]
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
function pbDashboardContentController($scope, $http, $location, pbDashboardService) {
    //$rootScope.$broadcast('scrollTop');
    var vm = this;

    // attributes
    vm.titile = 'this vm directive title';
    vm.projectCount = 'Project Count:';
    vm.count = 0;

    vm.qtyInitial = 0;
    $scope.qty = 0;
    vm.project = {};
    vm.activeProduct = {};
    vm.tabs = [];

    vm.valuatorPromise = null;
    vm.valuatorInstance = {};

    


    // urls for ng-include
    

    // methods and events
    vm.activateTab = activateTab;
    vm.getProjects = getProjects;
    vm.updateProject = updateProject;


    $scope.$watch(onCountChange, adjustProjectTags);
    $scope.$watch('onScaleChange', scaleChangeHandler);
    $scope.$watch('onPriceChange', priceChangeHandler);

   

    //$scope.$on('refreshController', init);

    init();

    function init() {
        //vm.valuatorPromise = pbDashboardService.createValuator();
        //createValuator();
        getProducts();

        vm.valuatorPromise = pbDashboardService.getValuators();
        //pbDashboardService.deleteValuator();
        //getProducts();

        vm.valuatorPromise.then(
            function (result) {
                vm.valuatorInstance = result;
                angular.forEach(vm.valuatorInstance, function (todo) {
                    if (todo._id == '55e11baf2b0eed8027e33f02') {
                        todo.metadata.projects.settings.count = 1;
                        todo.metadata.projects.settings.period = 30;
                        pbDashboardService.updateValuator(todo);
                    }
                });
                
                console.log('Success!', result);
            }, function (error) {
                console.log('Failure...', error);
            }
        );
    }

    //============================================= 

    function createValuator() {
        vm.valuatorPromise.then(
            function (result) {
                vm.valuatorInstance = result;

                vm.count = result.data.metadata.projects.settings.count;

                result.data.metadata.projects.settings.count = 1;

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
        pbDashboardService.updateValuator(vm.valuatorInstance);

        //vm.valuatorPromise.then(
        //    function (result) {
        //        vm.valuatorInstance = result;

        //        vm.count = result.data.metadata.projects.settings.count;

        //        vm.valuatorInstance.data.metadata.projects.settings.count;

        //        console.log('Success!', result);
        //    }, function (error) {
        //        console.log('Failure...', error);
        //    }
        //);
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
                code: vm.project.products[i].code,
                title: vm.project.products[i].title,
                content: vm.project.content_link
            });
        }
    }

    function onCountChange() {
        return vm.count;
    }
    

    function getProducts() {
        pbDashboardService.getProducts().then(function (data) {
            vm.project = data[0];

            $scope.qty = vm.project.products_amount;
            vm.qtyInitial = $scope.qty;
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
        pbDashboardService.get().then(function (data) {
            vm.projects = data;
        });
    }

    
}
