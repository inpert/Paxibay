module.exports = {
    directive: [pbSettingsContentDirective],
    controller: ['$scope', pbSettingsContentController]
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

function pbSettingsContentController($scope) {
    var vm = this;
    vm.tabs = [
        { code: 'code1', title: 'title1', content: './modules/pb-settings/directives/pb.settings.content.tab1.tmpl.html' },
        { code: 'code2', title: 'title2', content: './modules/pb-settings/directives/pb.settings.content.tab2.tmpl.html' }
    ];
}

