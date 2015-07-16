module.exports = ['$scope', view2Controller];

function view2Controller($scope) {
    $scope.test = "View2Ctrl Testing... this is view 2 ";

    var vm = this;
    vm.title = 'view2 My Policy List, wonderful';

    console.log("required!");
}