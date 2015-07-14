//'use strict';

var controllersModule = require('./view1');

/**
 * @ngInject
 */
function View1Ctrl($scope) {

  // ViewModel
  var vm = this;

  $scope.test = "Testing...aaaa ssss";
  vm.title = 'AngularJS, Gulp, and Browserify!';
  vm.number = 1234;

}

controllersModule.controller('View1Ctrl', View1Ctrl);