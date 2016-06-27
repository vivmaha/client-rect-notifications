indexApp.controller(
    'pageHome', 
    [
        '$scope',
        'ngUiClientRectNotifications',
        function($scope, ngUiClientRectNotifications) {
            var trackerElement = document.getElementsByClassName('tracker')[0];

            $scope.notifications = [];
            function OnNotification(type) {
                $scope.notifications.unshift(type);
                if ($scope.notifications.length > 20) {
                    $scope.notifications.pop();
                }
                $scope.$apply();
            }

            ngUiClientRectNotifications.register(
                trackerElement,
                {
                    completelyOutOfView : function() {
                        OnNotification('completelyOutOfView');
                        console.log('completelyOutOfView');
                    }, 
                    completelyInView : function() {
                        OnNotification('completelyInView');
                        console.log('completelyInView');
                    },
                    mostlyInView : function() {
                        OnNotification('mostlyInView');
                        console.log('mostlyInView');
                    },
                    partiallyInView : function() {
                        OnNotification('partiallyInView');
                        console.log('partiallyInView');
                    }
                }
            );
        }
    ]
);