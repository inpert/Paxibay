module.exports = ['$q', '$http', '$rootScope', pbSettingsService];

function pbSettingsService($q, $http, $rootScope) {
    return {
        updateSettings: updateSettings
    };

    function updateSettings(valuator) {
        var baseUrl = '/api/valuators/';
        $http({
            url: baseUrl + valuator._id,
            method: "PUT",
            data: valuator
        }).success(function (modifiedProject) {
            console.log(modifiedProject);
        });
    }


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
    //    $rootScope.$broadcast('systemIsLoading');

    //    var def = $q.defer();
    //    var i;

    //    var url = coreConfig.urlPath() + '/api/dashboard/existingPolicies/';
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

    //function getNewPolicies(req) {
    //    $rootScope.$broadcast('systemIsLoading');

    //    var def = $q.defer();
    //    var i;

    //    var url = coreConfig.urlPath() + '/api/dashboard/newPolicies/';
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

    //function get() {
    //    $rootScope.$broadcast('systemIsLoading');

    //    var url = coreConfig.urlPath() + '/api/clients/' + coreConfig.getClient() + '/brPolicy/get';
    //    return $http.get(url)
    //      .success(function (data, status, headers) {
    //          $rootScope.$broadcast('systemIsLoaded');

    //          // console.log('configuration loaded');	    
    //      })
    //      .error(function (data, status, headers) {
    //          console.log('brPolicyService failed to get');
    //          $rootScope.$broadcast('systemIsLoaded');

    //      });
    //}

    //function set(info) {
    //    $rootScope.$broadcast('systemIsLoading');

    //    var url = coreConfig.urlPath() + '/api/clients/' + coreConfig.getClient() + '/brPolicy/post';
    //    return $http.post(url, info)
    //      .success(function (data, status, headers) {
    //          $rootScope.$broadcast('systemIsLoaded');

    //          // console.log('configuration loaded');	    
    //      })
    //      .error(function (data, status, headers) {
    //          console.log('brPolicyService failed to post');
    //          $rootScope.$broadcast('systemIsLoaded');

    //      });
    //}
}