require('angular');
require('angular-route');
require('angular-animate');
//require('angular-resource'); 

require('../modules/pb-policy/pb.policy.app');
require('../modules/pb-capital/pb.capital.app.js');
require('../modules/pb-settings/pb.settings.app.js');
require('../modules/pb-dashboard/pb.dashboard.app.js');
require('../modules/pb-cost/pb.cost.app.js');
require('../modules/pb-loans/pb.loans.app.js');

module.exports = (function () {

    var appModuleName = 'paxiApp';
    var production = false;
    var appPath =production ? '/Tools/CMAdmin/adminPortal' : '.';

    var appModuleDependencies = [
        //'ngResource',
        'ngRoute',
        'ngAnimate',
        'pb.policyModule',
        'pb.capitalModule',
        'pb.dashboardModule',
        'pb.costModule',
        'pb.loansModule',
        'pb.settingsModule'
    ];

    var appConfig = ['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
        //$locationProvider.hashPrefix('!');
        $routeProvider
        .when("/", {
            templateUrl: "./modules/view2/view2.html"
        })
        .otherwise({
            redirectTo: '/'
        });
    }];

    var appController = ['$scope', function ($scope) {
        var appvm = this;

        appvm.title     = 'Paxibay Enhancer';
        appvm.menuUrl   = appPath + '/modules/core/menu.tmpl.html';
        appvm.loginUrl  = appPath + '/modules/pb-login/pb.login.tmpl.html';
        appvm.headerUrl = appPath + '/modules/pb-header/pb.header.tmpl.html';
        appvm.footerUrl = appPath + '/modules/pb-footer/pb.footer.tmpl.html';
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
