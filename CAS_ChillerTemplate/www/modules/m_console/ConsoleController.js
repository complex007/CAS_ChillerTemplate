angular.module('CASChillerApp')
    .controller('ConsoleController', ['$scope', '$state', '$rootScope', '$window', 'Page', function ($scope, $state, $rootScope, $window, Page) {

        if (!$window.localStorage.getItem('token')) {

            $state.go("login");
        }
        else
        {
            $scope.modules = JSON.parse($window.localStorage.getItem('modules'));
            Page.setTitle(" CAS&Chiller ECS");
            $scope.changeTitle = function () {
                
                Page.setTitle("Back to CAS&Chiller ECS");
                
            };
            $scope.logout = function () {
                $window.localStorage.clear();
                $state.go("login");
            };
        }
    }])

    ;
