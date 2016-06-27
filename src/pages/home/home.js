indexApp.controller(
    'pageHome', 
    [
        '$scope',
        'clientRectNotifications',
        function($scope, clientRectNotifications) {
            var trackerElement = document.getElementsByClassName('tracker')[0];

            $scope.notifications = [];
            function OnNotification(type) {
                $scope.notifications.unshift(type);
                if ($scope.notifications.length > 20) {
                    $scope.notifications.pop();
                }
                $scope.$apply();
            }

            clientRectNotifications.register(
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