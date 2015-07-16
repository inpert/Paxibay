module.exports = {
    directive: ['coreConfig', 'brPolicyService', brPolicySearchDirective],
    controller: ['$scope', 'brPolicyService', brPolicySearchController]
};

/*
 * @name: welcomeSearch
 * @example <welcome-search></welcome-search>
 */
function brPolicySearchDirective(coreConfig, brWelcomeService) {

    return {
        restrict: 'EC',
        scope: true,
        controller: 'brPolicySearchController as policySearchVm',
        templateUrl: coreConfig.path() + '/modules/br-policy/directives/br.policy.search.directive.tmpl.html',
        replace: true,
        link: function (scope, element, attrs, vm) {

        }
    };
}

function brPolicySearchController($scope, brPolicyService) {

}
