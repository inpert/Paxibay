module.exports = ['$q', '$http', '$rootScope', '$resource', pbDashboardService];

function pbDashboardService($q, $http, $rootScope, $resource) {
    var baseUrl = '/api/fmproducts/';
    // /api/fmproducts/:id
    var _metaData = {};
    var _weatherData = {};
    var resource = $resource(baseUrl + ":id", { id: "@_id" });

    return {
        getProducts: getProducts,
        getMetaData: getMetaData,
        updateProduct: updateProduct,
        get: get,
        set: set,
        getEmployees: getEmployees,
        setEmployees: setEmployees,
        setValuators: setValuators
    };
  
    function get() {

        // /api/employee  
        return $resource('/api/project').query().$promise;
    }

    function getEmployees() {

        return $resource('/api/employee').query().$promise;
    }


    //$http.get("/api/employee")
    //             .then(function (result) {
    //                 $scope.employees = result.data;
    //             },
    //             function (error) {
    //                 // Do something with the error
    //                 alert("error");
    //             });
    //// Call REST api to create employee
    //// $scope.newEmployee is the model object, this model object contains properties
    //// attributed with ng-model in the view elements.
    //// In our case, we have 1 property newEmployee.empName in the model properties collection.
    //$scope.create = function () {
    //    $http.post("/api/employee", $scope.newEmployee)
    //         .then(function (result) {
    //             // Push the added employee to the collection of employees.
    //             $scope.employees.push(result.data);
    //         });
    //};

    function setEmployees(Employee) {
        var url = '/api/employee';
        $http.post(url, Employee)
          .then(function (result) {
              // Push the added employee to the collection of employees.
              console.log(result);
          });
    }

    function setValuators_() {
        var url = '/api/valuator';
        $http.post(url, null)
          .then(function (result) {
              // Push the added employee to the collection of employees.
              console.log(result);
          });
    }

    function setValuators() {
        var url = '/api/valuators';
        $http.post(url, null)
          .then(function (result) {
              // Push the added employee to the collection of employees.
              console.log(result);
          });
    }


    //application.post("/api/valuator", function (req, res) {


    function set(info) {

        var url = '/api/project/AC1231ABB';
        info[0].name = info[0].name + " asdf";
        //info[0].$save();

        //$http({
        //    url: url,
        //    method: "POST",
        //    data: info
        //}).success(function (modifiedProduct) {
        //    console.log('configuration UPDATE');
        //});

        return $http.post(url, info)
          .success(function (data, status, headers) {
              console.log('configuration UPDATE');
              console.log(data);
          })
          .error(function (data, status, headers) {
              console.log('brCoreService failed to post');
              console.log(status);
          });
    }


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

    function updateProduct (product) {
        product.$save();
    }

}

//function brCoreService($http, $rootScope, coreConfig) {
//    return {
//        get: get,
//        set: set
//    }

//    function get() {
//        $rootScope.$broadcast('systemIsLoading');

//        var url = coreConfig.urlPath() + '/api/clients/' + coreConfig.getClient() + '/brCore/get';
//        return $http.get(url)
//          .success(function (data, status, headers) {
//              $rootScope.$broadcast('systemIsLoaded');

//              // console.log('configuration loaded');	    
//          })
//          .error(function (data, status, headers) {
//              console.log('brCoreService failed to get');
//              $rootScope.$broadcast('systemIsLoaded');

//          });
//    }

//    function set(info) {
//        $rootScope.$broadcast('systemIsLoading');

//        var url = coreConfig.urlPath() + '/api/clients/' + coreConfig.getClient() + '/brCore/post';
//        return $http.post(url, info)
//          .success(function (data, status, headers) {
//              $rootScope.$broadcast('systemIsLoaded');

//              // console.log('configuration loaded');	    
//          })
//          .error(function (data, status, headers) {
//              console.log('brCoreService failed to post');
//              $rootScope.$broadcast('systemIsLoaded');

//          });
//    }
//}