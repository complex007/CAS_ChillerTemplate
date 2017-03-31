angular.module('CASChillerApp')
    //rootScope belong to application level which will be resetted after refresh
    .service('Page', function ($rootScope) {
        return {
            setTitle: function (title) {
                $rootScope.title = title;
            }
        }
    })



    ;
