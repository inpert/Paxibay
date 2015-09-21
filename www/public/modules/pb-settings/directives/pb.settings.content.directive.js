module.exports = {
    directive: [pbSettingsContentDirective],
    controller: ['$scope', '$rootScope', 'pbSettingsService', pbSettingsContentController]
};

function pbSettingsContentDirective() {

  return {
    restrict: 'EA',
    replace: true,
    scope: {
      details: '='
    },
    controller: 'pbSettingsContentController as vm',
    templateUrl: '/modules/pb-settings/directives/pb.settings.content.tmpl.html',
    link: function(scope, element, attrs, vm) {

    }
  };
}

function pbSettingsContentController($scope, $rootScope, pbSettingsService) {

    var vm = this;
    vm.updateSettings = updateSettings;

    vm.tabs = [
        { code: 'code1', title: 'title1', content: './modules/pb-settings/directives/pb.settings.content.tab1.tmpl.html' },
        { code: 'code2', title: 'title2', content: './modules/pb-settings/directives/pb.settings.content.tab2.tmpl.html' }
    ];


    init();

    function init() {

        vm.settings = $rootScope.currentValuator.metadata.settings;
        console.log(vm.settings);
        //vm.settings.settings.duration.startyear = new Date().getFullYear();
        vm.settings.settings.isinitial = false;

        //delete vm.settings.settings.duration.beginning;

        vm.updateSettings();

        //if (vm.settings.scales.length === 0) {
        //    vm.getScales();
        //}
        //delete vm.settings.settings.duration.beginning;
    }

    function updateSettings() {
        pbSettingsService.updateSettings($rootScope.currentValuator);
    }

}

