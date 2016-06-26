indexApp.controller('pageHome', ['$scope',
    function($scope) {
        // This is obviously not scalable to multiple parallax sources
        // But i have thoughts on how to address this if needed in the future.
        //  1) This module will determine which child to listen to based on DOM location in viewport.
        //  2) Child modules will provide the templates to be inserted into the background
        $scope.$on('parallax', function(event, parallaxAmount) {
            $scope.parallaxAmount = parallaxAmount;
        });
    }
]);