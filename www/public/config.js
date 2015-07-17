require('angular');
require('angular-route');
require('angular-animate');

require('./modules/pb-policy/pb.policy.app');
require('./modules/pb-capital/pb.capital.app.js');
require('./modules/pb-settings/pb.settings.app.js');
require('./modules/pb-dashboard/pb.dashboard.app.js');
require('./modules/pb-cost/pb.cost.app.js');
require('./modules/pb-loans/pb.loans.app.js');

// Init the application configuration module for AngularJS application
module.exports = (function () {
    // Init module configuration options
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
        registerModule: registerModule
    };
})();

