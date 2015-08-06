module.exports = ['$q', '$http', '$rootScope', '$resource', pbCapitalService];



function pbCapitalService($q, $http, $rootScope, $resource) {
    var baseUrl = '/api/project/';
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

   

    //function getCapital_() {
    //    $rootScope.$broadcast('systemIsLoading');
    //    $http.get(baseUrl)
    //        .success(function (data) {
    //            _metaData = data;
    //            $rootScope.$broadcast('systemIsLoaded');
    //        })
    //        .error(function (data, error) {
    //            $location.path('/login');
    //            $rootScope.$broadcast('systemIsLoaded');
    //        });
    //}

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
   
}