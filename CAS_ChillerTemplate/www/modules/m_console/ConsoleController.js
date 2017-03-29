angular.module('CASChillerApp')
    .controller('ConsoleController', ['$scope', '$rootScope', 'loginService', function ($scope, $rootScope, loginService) {

        $scope.modules = loginService.modules;
        $rootScope.showConsole = " CAS&Chiller ECS";
        $scope.toggleModules = function () {
            $rootScope.showConsole = "Back to CAS&Chiller ECS";

        };


    }]);
