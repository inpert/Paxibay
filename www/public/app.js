
var App = require('./config/config.js');

angular.module(App.appModuleName, App.appModuleDependencies)
    .config(App.appConfig)
    .controller('appController', App.appController);

angular.element(document).ready(function() {
    angular.bootstrap(document, [App.appModuleName]);
});
