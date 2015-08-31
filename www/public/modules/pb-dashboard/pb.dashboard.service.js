module.exports = ['$q', '$http', '$rootScope', '$resource', pbDashboardService];

function pbDashboardService($q, $http, $rootScope, $resource) {
    var baseUrl = '/api/fmproducts/';
    var _metaData = {};
    var _weatherData = {};
    var resource = $resource(baseUrl + ":id", { id: "@_id" });

    return {
        getProducts: getProducts,
        //get: get,
        createValuator: createValuator,
        getValuator: getValuator,
        getValuators: getValuators,
        updateValuator: updateValuator,
        deleteValuator: deleteValuator        
    };
  
    function createValuator() {
        var deferred = $q.defer();
        var url = '/api/valuators';
        $http.post(url, null)
          .then(deferred.resolve, deferred.reject);

        return deferred.promise;
    }

    //function get() {
    //    return $resource('/api/project').query().$promise;
    //}

    function getValuator() {
        var baseUrl = '/api/valuators/';
        $http({
            url: baseUrl + '55e11ba32b0eed8027e33f01',
            method: "GET"
        }).success(function (modifiedProject) {
            console.log(modifiedProject);
        });
    }

    function getValuators() {
        var productsResource = $resource('/api/valuators');
        var resource = productsResource.query().$promise;
        return resource;
    }

    function getValuators_() {
        var baseUrl = '/api/valuators';
        $http({
            url: baseUrl,
            method: "GET"
        }).success(function (modifiedProject) {
            console.log(modifiedProject);
        });

    }

    function updateValuator(valuator) {
        var baseUrl = '/api/valuators/';
        $http({
            url: baseUrl + valuator._id,
            method: "PUT",
            data: valuator
        }).success(function (modifiedProject) {
            console.log(modifiedProject);
        });
    }

    function deleteValuator(valuator) {
        var baseUrl = '/api/valuators/';
        $http({
            url: baseUrl + valuator._id,
            method: "DELETE"
        }).success(function () {
            console.log('delete success');
        });
    }

    function getProducts() {

        return resource.query().$promise;
    }
}
