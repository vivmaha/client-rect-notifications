var app = require('../../scripts/indexApp').app;

app.controller(
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
                    }, 
                    completelyInView : function() {
                        OnNotification('completelyInView');
                    },
                    mostlyInView : function() {
                        OnNotification('mostlyInView');
                    },
                    partiallyInView : function() {
                        OnNotification('partiallyInView');
                    }
                }
            );
        }
    ]
);