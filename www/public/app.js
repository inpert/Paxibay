
var App = require('./config/config.js');

angular.module(App.appModuleName, App.appModuleDependencies);
angular.module(App.appModuleName).config(App.appConfig);
angular.module(App.appModuleName).controller('appController', App.appController);

angular.element(document).ready(function() {
	//Fixing facebook bug with redirect
    if (window.location.hash === '#_=_') window.location.hash = '#!';

    angular.bootstrap(document, [App.appModuleName]);
});
