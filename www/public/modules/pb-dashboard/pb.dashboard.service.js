module.exports = ['$q', '$http', '$rootScope', '$resource', pbDashboardService];

function pbDashboardService($q, $http, $rootScope, $resource) {
    var baseUrl = '/api/fmproducts/';
    var _metaData = {};
    var _weatherData = {};
    var resource = $resource(baseUrl + ":id", { id: "@_id" });

    return {
        getProducts: getProducts,
        getMetaData: getMetaData,
        updateProduct: updateProduct,
        get: get,
        //set: set,
        //setValuators: setValuators,
        getValuator: getValuator
    };
  
    function get() {
        return $resource('/api/project').query().$promise;
    }

    function setEmployees(Employee) {
        var url = '/api/employee';
        $http.post(url, Employee)
          .then(function (result) {
              // Push the added employee to the collection of employees.
              console.log(result);
          });
    }

    function getValuator() {
        var deferred = $q.defer();
        var url = '/api/valuator';
        $http.post(url, null)
          .then(deferred.resolve, deferred.reject);

        return deferred.promise;
    }
   

    //function set(info) {

    //    var url = '/api/project/AC1231ABB';
    //    info[0].name = info[0].name + " asdf";

    //    return $http.post(url, info)
    //      .success(function (data, status, headers) {
    //          console.log('configuration UPDATE');
    //          console.log(data);
    //      })
    //      .error(function (data, status, headers) {
    //          console.log('brCoreService failed to post');
    //          console.log(status);
    //      });
    //}


    function getMetaData() {
        return _metaData;
    }

    function getProducts() {
               
        return resource.query().$promise;
    }

    function updateProduct (product) {
        product.$save();
    }

}