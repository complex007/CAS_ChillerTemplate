angular.module('CASChillerApp')
    .constant("baseURL", "http://192.168.95.185/testwebapi/api/")
    .service('dataFactory', ['$resource', 'baseURL', function ($resource, baseURL) {
        this.getData = function () {
            var resource= $resource(baseURL + "Tem", null, { 'get': { method: 'GET'} });
            return resource;
        };

        

    }]);