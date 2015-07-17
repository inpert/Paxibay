module.exports = ['$scope', '$http', 'pbCapitalService', pbCapitalController];  

function pbCapitalController($scope, $http, pbCapitalService) {
    var vm = this; 
    vm.title = 'My capital List';

    var baseUrl = '/modules/pb-capital/project.json';
    vm.listProducts = function () {
        $http.get(baseUrl).success(function (data) {
            vm.projects = data;
        });
    };
}