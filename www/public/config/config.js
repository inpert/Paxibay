require('angular');
require('angular-route');
require('angular-animate');

require('../modules/pb-policy/pb.policy.app');
require('../modules/pb-capital/pb.capital.app.js');
require('../modules/pb-settings/pb.settings.app.js');
require('../modules/pb-dashboard/pb.dashboard.app.js');
require('../modules/pb-cost/pb.cost.app.js');
require('../modules/pb-loans/pb.loans.app.js');

module.exports = (function () {

    var appModuleName = 'paxiApp';

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
        appvm.title = 'Paxibay Enhancer';
        appvm.menuUrl = 'modules/core/menu.tmpl.html';

        // ng-include="'modules/core/menu.tmpl.html'"></div>
        //appvm.menuUrl = coreConfig.path() + '/modules/core/menu.tmpl.html';
        //appvm.brLoginUrl = coreConfig.path() + '/modules/br-login/br.login.tmpl.html';
        //appvm.headerUrl = coreConfig.path() + '/modules/br-header/br.header.tmpl.html';
        //appvm.footerUrl = coreConfig.path() + '/modules/br-footer/br.footer.tmpl.html';

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

