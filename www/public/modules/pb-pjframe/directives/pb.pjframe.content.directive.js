module.exports = {
    directive: ['pbPjframeService', pbPjframeContentDirective],
    controller: ['$scope', '$rootScope', 'pbPjframeService', pbPjframeContentController]
};

function pbPjframeContentDirective(pbPjframeService) {

    return {
        restrict: 'EA',
        replace: true,
        scope: {
            details: '='
        },
        controller: 'pbPjframeContentController as vm',
        templateUrl: "/modules/pb-pjframe/directives/pb.pjframe.content.tmpl.html",
        link: function(scope, element, attrs, vm) {

        }
    };
}

function pbPjframeContentController($scope, $rootScope, pbPjframeService) {
    $scope.dateFormat = 'MMM d, y';

        $scope.rowCollection= [];
     $scope.displayCollection = [];
     $scope.itemsByPage = 10;

     init();

     function init() {
         var str = $rootScope.currentValuator;
         console.log('here is pjframe');
         console.log(str);
     }

    $scope.$watch("details", function(data){

        $scope.title = data.title;

        var req = {
            userid: data.userid,
            role: data.role
        };

        brPolicyService.getNewPolicies(req).then(function(result) {
            $scope.rowCollection = result;
            $scope.itemsByPage = data.itemsByPage;
            $scope.displayCollection = [].concat($scope.rowCollection);

            $scope.displayedPages = result.length/ $scope.itemsByPage;

        }, function(error) {
            alert(error.message);
        });
/*        if(data != {}){



        }*/
    });
}