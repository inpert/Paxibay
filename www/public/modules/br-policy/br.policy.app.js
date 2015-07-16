
var existingPoliciesDirective = require('./directives/br.existingpolicy.table.directive.js');
var newPoliciesDirective = require('./directives/br.newpolicy.table.directive.js');
var policySearchDirective = require('./directives/br.policy.search.directive.js');
var myPoliciesDirective = require('./directives/br.mypolicy.table.directive.js');

module.exports = angular.module('br.policyModule', [])
    .config(require('./br.policy.routes.js'))
    .controller('brPolicyController', require('./br.policy.controller.js'))

    .directive('brPolicySearch', policySearchDirective.directive)
    .controller('brPolicySearchController', policySearchDirective.controller)

    .directive('brExistingPolicies', existingPoliciesDirective.directive)
    .directive('pageSelect', existingPoliciesDirective.directivePageSelect)
    .controller('brExistingPoliciesController', existingPoliciesDirective.controller)

    .directive('brNewPolicies', newPoliciesDirective.directive)
    .controller('brNewPoliciesController', newPoliciesDirective.controller)

    .directive('brMyPolicies', myPoliciesDirective.directive)
    .controller('brMyPoliciesController', myPoliciesDirective.controller)

    .factory('brPolicyService', require('./br.policy.service.js'));





//module.exports = angular.module('SampleApp.view1', ['ngRoute'])

//.config(['$routeProvider', function ($routeProvider) {
//    $routeProvider.when('/view1', {
//        templateUrl: 'modules/view1/view1.html',
//        controller: 'View1Ctrl'
//    });
//}])

//.controller('View1Ctrl', ['$scope', function ($scope) {
//    $scope.test = "Testing...aaaa";
//    console.log("required!");
//}]);