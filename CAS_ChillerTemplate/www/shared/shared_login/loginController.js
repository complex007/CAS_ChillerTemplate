angular.module('CASChillerApp')
    .controller('LoginCtrl', ['$scope', '$state', '$http', '$sessionStorage', 'loginService', function ($scope, $state, $http, $sessionStorage, loginService) {

        $scope.Login_Information = "";

        //$scope.login = function () {
        //    loginService.loginResult($scope.username, $scope.password, $scope.appname).get(
        //        function (response) {
        //            var result = response;
        //            loginService.modules = result.Modules;
                    
        //            $state.go("app");
        //        },
        //        function (response) {
        //            $scope.Login_Information = " * Your login information is incorrect!";
        //        }
        //    )
           
        //}   

        $scope.login = function () {


            loginService.loginResult2().post({
                Username: $scope.username,
                Password: $scope.password,
                Appname: $scope.appname
            },
                function (response) {
                    var result = response;


                    if (result.Status) {
                        loginService.modules = result.Modules;
                        $scope.$storage = $sessionStorage.$default({
                            token: result.AppName
                        });           
                        $http.defaults.headers.common['token'] = $scope.$storage.token;
                        
                        $state.go("app");
                    }
                    else {
                        $scope.Login_Information = " * Your login information is incorrect!";
                    }

                },
                function (response) {
                    $scope.Login_Information = " * Your login information is incorrect!";
                }
            );

        };   
    }])
   
    





    ;
        

