angular.module('CASChillerApp')
    .controller('ConsoleController', ['$scope', '$state', '$rootScope', '$window', 'ConsoleService', function ($scope, $state, $rootScope, $window, ConsoleService) {

        if (!$window.localStorage.getItem('token')) {

            $state.go("login");
        }
        else
        {
            //set back action
            $scope.backname = $window.localStorage.getItem('system');
            $scope.backstate = "app";
            $scope.currentname = "";
            var system = $window.localStorage.getItem('system');
            ConsoleService.getModules(system).query(
                function (response) {

                    $scope.modules = response;

                },
                function (response) {
                    $window.localStorage.clear();
                    $state.go("login");
                }

            );


            
           
          
        }
    }])

    ;
