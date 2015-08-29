module.exports = ['$q', '$http', '$rootScope', '$resource', pbDashboardService];

function pbDashboardService($q, $http, $rootScope, $resource) {
    var baseUrl = '/api/fmproducts/';
    var _metaData = {};
    var _weatherData = {};
    var resource = $resource(baseUrl + ":id", { id: "@_id" });

    return {
        getProducts: getProducts,
        get: get,
        createValuator: createValuator,
        getValuator: getValuator,
        getValuators: getValuators,
        updateValuator: updateValuator,
        deleteValuator: deleteValuator        
    };
  
    function get() {
        return $resource('/api/project').query().$promise;
    }

    function getValuators() {
        //var baseUrl = '/valuators/';
        //var values = $resource(baseUrl + ":id", { id: "@_id" });
        //return values.query().$promise;

        var baseUrl = '/api/valuators';
        $http({
            url: baseUrl,
            method: "GET"
        }).success(function (modifiedProject) {
            console.log(modifiedProject);
        });

    }

    function createValuator() {
        var deferred = $q.defer();
        var url = '/api/valuators';
        $http.post(url, null)
          .then(deferred.resolve, deferred.reject);

        return deferred.promise;
    }
   
    function getValuator() {
        var baseUrl = '/api/valuators/';
        $http({
            url: baseUrl + '55e10a95ce3c4ef4405c1225',
            method: "GET"
        }).success(function (modifiedProject) {
            console.log(modifiedProject);
        });
    }

    function updateValuator(valuator) {
        var baseUrl = '/api/valuators/';
        $http({
            url: baseUrl + '55e10a95ce3c4ef4405c1225',
            method: "PUT",
            data: valuator
        }).success(function (modifiedProject) {
            console.log(modifiedProject);
        });
    }

    function deleteValuator() {
        var baseUrl = '/api/valuators/';
        $http({
            url: baseUrl + '55e110b0d12ecbcc21c0a5db',
            method: "PUT"
        }).success(function (modifiedProject) {
            console.log(modifiedProject);
        });
    }

    function getProducts() {

        return resource.query().$promise;
    }
}