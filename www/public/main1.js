//var angular = require('angular');

angular.element(document).ready(function () {

    var app = angular.module('demo', [])
      .controller('WelcomeController', function ($scope) {
          $scope.greeting = 'Welcome!';
      });

    angular.bootstrap(document, ['demo']);
});