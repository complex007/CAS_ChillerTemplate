angular.module('CASChillerApp')
    .service('Page', function ($rootScope) {
        return {
            setTitle: function (title) {
                $rootScope.title = title;
            }
        }
    })



    ;
