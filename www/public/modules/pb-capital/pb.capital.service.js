module.exports = ['$q', '$http', '$rootScope', '$resource', pbCapitalService];



function pbCapitalService($q, $http, $rootScope, $resource) {
    var baseUrl = '/modules/pb-capital/project.json';
    var urlWeather = "http://api.openweathermap.org/data/2.5/forecast";
    var _metaData = {};
    var _weatherData = {};

    return {
        getCapital: getCapital,
        getMetaData: getMetaData,
        getWeather: getWeather
        //get: get,
        //set: set,
        //getExistingPolicies: getExistingPolicies,
        //getNewPolicies: getNewPolicies,
        //getMyPolicies: getMyPolicies,
    };

   

    function getCapital_() {
        $rootScope.$broadcast('systemIsLoading');
        $http.get(baseUrl)
            .success(function (data) {
                _metaData = data;
                $rootScope.$broadcast('systemIsLoaded');
            })
            .error(function (data, error) {
                $location.path('/login');
                $rootScope.$broadcast('systemIsLoaded');
            });
    }

    //function getWeatherData() {
    //    return _weatherData;
    //}

    function getMetaData() {
        return _metaData;
    }

    function getCapital() {
        _metaData = $resource(baseUrl).query();
    }

    function getWeather(weatherParams) {
        return $resource(urlWeather).get(weatherParams, function (successResult) {
                return successResult;
            }, function (errorResult) {
                console.log(errorResult);
            });
    }


    //app.factory('weather', function ($resource, baseUrl) {

    //    var weather = $resource(baseUrl);

    //    return {
    //        getWeather: function (weatherParams) {
    //            return weather.get(weatherParams, function (successResult) {
    //                return successResult;
    //            }, function (errorResult) {
    //                console.log(errorResult);
    //            });
    //        }
    //    };
    //});


    //$scope.city = { name: 'toronto' };
    //$scope.current = {};
    //$scope.loading = false;

    //$scope.checkWeather = function () {
    //    $scope.loading = true;
    //    var city = {
    //        q: $scope.city.name
    //    };

    //    $scope.weather = weather.getWeather(city);
    //    $location.path('/result');
    //    $scope.loading = false;
    //};



    //app.factory('weather', function ($resource, baseUrl) {

    //    var weather = $resource(baseUrl);

    //    return {
    //        getWeather: function (weatherParams) {
    //            return weather.get(weatherParams, function (successResult) {
    //                return successResult;
    //            }, function (errorResult) {
    //                console.log(errorResult);
    //            });
    //        }
    //    };
    //});


  //function getMyPolicies(req) {
  //    $rootScope.$broadcast('systemIsLoading');

  //    var def = $q.defer();
  //    var i;

  //    var url = coreConfig.urlPath() + '/api/dashboard/myPolicies/';
  //    $http.post(url, req).
  //        success(function (data, status, headers, config) {
  //            $rootScope.$broadcast('systemIsLoaded');
  //            def.resolve(data);
  //        }).
  //        error(function (data, status, headers, config) {
  //            def.reject("Failed");
  //            alert(JSON.stringify('received error ' + data));
  //            $rootScope.$broadcast('systemIsLoaded');
  //        });


  //    return def.promise;
  //}
  //function getExistingPolicies(req) {
  //  $rootScope.$broadcast('systemIsLoading');

  //  var def = $q.defer();
  //  var i;

  //  var url = coreConfig.urlPath() + '/api/dashboard/existingPolicies/';
  //  $http.post(url,req).
  //      success(function(data, status, headers, config) {
  //        $rootScope.$broadcast('systemIsLoaded');
  //        def.resolve(data);
  //      }).
  //      error(function(data, status, headers, config) {
  //        def.reject("Failed");
  //        alert(JSON.stringify('received error '+ data));
  //        $rootScope.$broadcast('systemIsLoaded');
  //      });


  //  return def.promise;
  //}

  //function getNewPolicies(req) {
  //  $rootScope.$broadcast('systemIsLoading');

  //  var def = $q.defer();
  //  var i;

  //  var url = coreConfig.urlPath() + '/api/dashboard/newPolicies/';
  //  $http.post(url,req).
  //      success(function(data, status, headers, config) {
  //        $rootScope.$broadcast('systemIsLoaded');
  //        def.resolve(data);
  //      }).
  //      error(function(data, status, headers, config) {
  //        def.reject("Failed");
  //        alert(JSON.stringify('received error '+ data));
  //        $rootScope.$broadcast('systemIsLoaded');
  //      });


  //  return def.promise;
  //}

  //function get() {
  //  $rootScope.$broadcast('systemIsLoading');

  //  var url = coreConfig.urlPath() + '/api/clients/' + coreConfig.getClient() + '/brPolicy/get';
  //  return $http.get(url)
  //    .success(function(data, status, headers) {
  //      $rootScope.$broadcast('systemIsLoaded');

  //      // console.log('configuration loaded');	    
  //    })
  //    .error(function(data, status, headers) {
  //      console.log('brPolicyService failed to get');
  //      $rootScope.$broadcast('systemIsLoaded');

  //    });
  //}

  //function set(info) {
  //  $rootScope.$broadcast('systemIsLoading');

  //  var url = coreConfig.urlPath() + '/api/clients/' + coreConfig.getClient() + '/brPolicy/post';
  //  return $http.post(url, info)
  //    .success(function(data, status, headers) {
  //      $rootScope.$broadcast('systemIsLoaded');

  //      // console.log('configuration loaded');	    
  //    })
  //    .error(function(data, status, headers) {
  //      console.log('brPolicyService failed to post');
  //      $rootScope.$broadcast('systemIsLoaded');

  //    });
  //}
}