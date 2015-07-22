angular.module('modalPopup', [
    'ui.router',
    'ui.bootstrap'
]);

angular.module('modalPopup').controller('modalCtrl', function ($scope, $modal, $log) {

    $scope.popupTitle = 'Re-assign Log to Agent';
    $scope.items = [];
    $scope.animationsEnabled = true;
    $scope.open = function (size) {
        var modalInstance = $modal.open({
            animation: $scope.animationsEnabled,
            templateUrl: 'modalContent.html',
            controller: 'modalInstanceCtrl',
            size: size,
            resolve: {
                items: function () {
                    return $scope.items;
                }
            }
        });

        modalInstance.result.then(function (selectedItem) {
            $scope.selected = selectedItem;
        }, function () {
            $log.info('Modal dismissed at: ' + new Date());
        });
    };

    $scope.toggleAnimation = function () {
        $scope.animationsEnabled = !$scope.animationsEnabled;
    };

});

angular.module('modalPopup').controller('modalInstanceCtrl', function ($scope, $modalInstance, items) {

    $scope.items = items;
    $scope.selected = {
        item: $scope.items[0]
    };

    $scope.ok = function () {
        $modalInstance.close($scope.selected.item);
    };

    $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
    };
});