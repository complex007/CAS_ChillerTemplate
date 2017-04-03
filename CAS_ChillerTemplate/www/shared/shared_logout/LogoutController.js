
angular.module('CASChillerApp')

    .controller('LogoutController', ['$scope', '$window', '$state', function ($scope, $window, $state) {
        $scope.logout = function () {
            $window.localStorage.clear();
            $state.go("login");
        };

    }]);