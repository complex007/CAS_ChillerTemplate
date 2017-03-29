angular.module('CASChillerApp')
    .constant("loginURL", "http://192.168.95.185/CASChillerSystem/api/")
    .service('loginService', ['$resource', 'loginURL', function ($resource, loginURL) {
        this.loginResult = function (username, password, appname) {
            var url = loginURL + "login/" + username + "/" + password + "/" + appname;
            var result = $resource(url, null, { 'get': { method: 'GET' } });

            return result;
        };
        this.loginResult2 = function () {
            var url = loginURL + "login";
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
        
        this.modules = [];
    }])

    
    ;