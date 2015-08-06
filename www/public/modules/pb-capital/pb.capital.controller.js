module.exports = ['$scope', '$http', 'pbCapitalService', pbCapitalController];  

function pbCapitalController($scope, $http, pbCapitalService) {
    var vm = this; 
    vm.title = 'My capital List';
    $scope.city = { name: 'toronto' };

    pbCapitalService.getCapital();

    vm.listProjects = function () {
        vm.projects = pbCapitalService.getMetaData();
    };

    vm.checkWeather = function () {
        var city = {
            q: $scope.city.name
        };

        vm.weather = pbCapitalService.getWeather(city);
    };

}