angular.module('CASChillerApp')
    .controller('ConsoleController', ['$scope', '$sessionStorage', 'loginService', function ($scope, $sessionStorage, loginService) {

        $scope.modules = loginService.modules;
        $scope.$storage = $sessionStorage.$default({
            showConsole: " CAS&Chiller ECS"
        });
        
        $scope.toggleModules = function () {          
            $scope.$storage.showConsole = "Back to CAS&Chiller ECS";
        };
        

    }]);
