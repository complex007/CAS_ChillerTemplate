angular.module('CASChillerApp')
    .controller('LoginCtrl', ['$scope', '$state', '$http', '$window', 'loginService', function ($scope, $state, $http, $window, loginService) {

        if ($window.localStorage.getItem('token')) {

            $state.go("login");
        }
        else {
            $scope.Login_Information = "";


            $scope.login = function () {

                loginService.loginResult2().post({
                    Username: $scope.username,
                    Password: $scope.password,
                    Appname: $scope.appname
                },
                    function (response) {
                        var result = response;

                        if (result.Status) {

                            $window.localStorage.setItem('modules', JSON.stringify(result.Modules));
                            $window.localStorage.setItem('token', result.AppName);

                            $state.go("app");
                        }
                        else {
                            console.log("here");

                            $scope.Login_Information = " * Your login information is incorrect!";
                        }

                    },
                    function (response) {
                        $scope.Login_Information = " * Your login information is incorrect!";
                    }
                );
            };
        }
         
    }])
    .factory('AuthInterceptor', function ($window, $q, $location) {
        return {
            request: function (config) {
                config.headers = config.headers || {};
                if ($window.localStorage.getItem('token')) {
                    config.headers['token'] =  $window.localStorage.getItem('token');
                }
                return config || $q.when(config);
            },
            response: function (response) {
                if (response.status === 401) {
                    $location.path('/');
                }
                return response || $q.when(response);
            }
        };
    })
    .config(function ($httpProvider) {
        $httpProvider.interceptors.push('AuthInterceptor');
    })





    ;
        

