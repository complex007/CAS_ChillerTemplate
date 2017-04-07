angular.module('CASChillerApp')
    .constant("baseURL", "http://10.218.32.188/CASChillerSystemtest/api/")
    .service('loginService', ['$resource', 'baseURL', function ($resource, baseURL) {

        this.loginResult2 = function () {
            var url = baseURL + "login";
            var result = $resource(url, {
                Username: '@username',
                Password: '@password',
                Appname: '@appname'
            }, {
                    'post': {
                        method: 'POST'
                    }
                });

            return result;
        };
       
    }])

    
    ;