module.exports = ['$q', '$http', '$rootScope', '$resource', pbDashboardService];

function pbDashboardService($q, $http, $rootScope, $resource) {
    var baseUrl = '/api/fmproducts/';
    var _metaData = {};
    var _weatherData = {};
    var resource = $resource(baseUrl + ":id", { id: "@_id" });

    return {
        getProducts: getProducts,
        getMetaData: getMetaData
    };
  
    function getMetaData() {
        return _metaData;
    }

    function getProducts_() {
        //$http.get(baseUrl).success(function (data) {
        //    $rootScope.$broadcast('productsLoaded', { products: data });
        //});

        resource.query(function (data) {
            $rootScope.$broadcast('productsLoaded', { products: data });
        });
    }


    function getProducts() {
        return resource.query();
    }

    //$scope.listProducts = function () {
    //    $scope.products = $scope.productsResource.query();
    //    $scope.products.$promise.then(function (data) {
    //        // do something with the data
    //    });
    //}



}