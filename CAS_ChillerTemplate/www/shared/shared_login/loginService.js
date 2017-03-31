angular.module('CASChillerApp')
    .constant("loginURL", "http://192.168.95.185/CASChillerSystem/api/")
    .service('loginService', ['$resource', 'loginURL', function ($resource, loginURL) {

        

        // this will get json like following:
        //{
        //    "Id": 1000092,
        //        "Status": true,
        //            "AppName": "1fEz9yOa+R5yAe02MhRByjgB3ws=",
        //                "Modules": [
        //                    {
        //                        "Module_Name": "Facility for CAS",
        //                        "Module_Icon": "images/facilityforCAS.jpg"
        //                    }
        //                ]
        //}
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