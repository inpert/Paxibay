
var App = require('./config/config.js');

angular.module(App.appModuleName, App.appModuleDependencies);
angular.module(App.appModuleName).config(App.appConfig);
angular.module(App.appModuleName).controller('appController', App.appController);

angular.element(document).ready(function() {
    angular.bootstrap(document, [App.appModuleName]);
});
