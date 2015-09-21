require('angular');
require('angular-route');
require('angular-animate');
require('angular-resource');
require('angular-ui-router');       // 'ui.router',
require('angular-ui-bootstrap');    // 'ui.bootstrap',



require('../modules/pb-capital/pb.capital.app.js');
require('../modules/pb-settings/pb.settings.app.js');
require('../modules/pb-dashboard/pb.dashboard.app.js');
require('../modules/pb-cost/pb.cost.app.js');

require('../modules/pb-taxes/pb.taxes.app.js');
require('../modules/pb-liquidity/pb.liquidity.app.js');
require('../modules/pb-depreciation/pb.depreciation.app.js');
require('../modules/pb-pjplan/pb.pjplan.app.js');
require('../modules/pb-pjloans/pb.pjloans.app.js');
require('../modules/pb-pjframe/pb.pjframe.app');



module.exports = (function () {

    var appModuleName = 'paxiApp';
    var production = false;
    var appPath =production ? '/Tools/CMAdmin/adminPortal' : '.';

    var appModuleDependencies = [
        'kendo.directives',
        'ui.bootstrap',
        'ui.router',
        'ngResource',
        'ngRoute',
        'ngAnimate',
        'pb.capitalModule',
        'pb.dashboardModule',
        'pb.costModule',
        'pb.settingsModule',
        'pb.taxesModule',
        'pb.liquidityModule',
        'pb.depreciationModule',
        'pb.pjplanModule',
        'pb.pjloansModule',
        'pb.pjframeModule'
    ];

    var appConfig = ['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
        //$locationProvider.hashPrefix('!');
        $routeProvider
        .when("/", {
            templateUrl: "./modules/pb-dashboard/pb.dashboard.tmpl.html" 
        })
        .otherwise({
            redirectTo: '/'
        });
    }];

    var appController = ['$http', '$scope', '$rootScope', function ($http, $scope, $rootScope) {
        var appvm = this;

        appvm.phoneOptions = ['phone1', 'phone2', 'phone3', 'phone4'];

        appvm.title     = 'Paxibay Enhancer';
        appvm.menuUrl   = appPath + '/modules/core/menu.tmpl.html';
        appvm.loginUrl  = appPath + '/modules/pb-login/pb.login.tmpl.html';
        appvm.headerUrl = appPath + '/modules/pb-header/pb.header.tmpl.html';
        appvm.footerUrl = appPath + '/modules/pb-footer/pb.footer.tmpl.html';

        init();

        function init() {
            //initialValuator();

            getValuator();
        }

        function getValuator() {
            var baseUrl = '/api/valuators/';
            $http({
                url: baseUrl + '55e395a874a7469416566da7',
                method: "GET"
            }).success(function (valuator) {
                //console.log(valuator);
                $rootScope.currentValuator = valuator;
            });
        }

        function initialValuator() {
            //createValuator();

            ////==================================
            //valuatorPromise.then(
            //    function (result) {
            //        console.log('Success!', result);
            //    }, function (error) {
            //        console.log('Failure...', error);
            //    }
            //);
        }

        function createValuator() {
            var url = '/api/valuators';
            $http.post(url, null).then(
                function (result) {
                    console.log('Success!', result);
                }, function (error) {
                    console.log('Failure...', error);
                });
        }


    }];

    // Add a new vertical module
    var registerModule = function (moduleName, dependencies) {
        // Create angular module
        angular.module(moduleName, dependencies || []);

        // Add the module to the AngularJS configuration file
        angular.module(applicationModuleName).requires.push(moduleName);
    };

    return {
        appModuleName: appModuleName,
        appModuleDependencies: appModuleDependencies,
        appConfig: appConfig,
        appController: appController,
        registerModule: registerModule
    };
})();
