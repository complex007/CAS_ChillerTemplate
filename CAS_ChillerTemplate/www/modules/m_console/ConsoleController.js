angular.module('CASChillerApp')
    .controller('ConsoleController', ['$scope', '$state', '$rootScope', '$window', function ($scope, $state, $rootScope, $window) {

        if (!$window.localStorage.getItem('token')) {

            $state.go("login");
        }
        else
        {
            $scope.modules = JSON.parse($window.localStorage.getItem('modules'));
            $scope.backname = " CAS&Chiller ECS";
            $scope.backstate = "app";
          
        }
    }])

    ;
