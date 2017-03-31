
angular.module('CASChillerApp')
  
    .controller('GraphCtrl', ['$scope', 'dataFactory', 'Page', function ($scope, dataFactory, Page) {
        Page.setTitle("< CAS&Chiller ECS");
        $scope.temdata = [];      
        dataFactory.getData().query(
            function (response) {
                $scope.temdata = response;
                $scope.chart = c3.generate(
                    {
                        bindto: '#behavior',
                        data: {
                            x: 'Creationtime',
                            xFormat: '%Y-%m-%d %H:%M:%S',
                            json: $scope.temdata,
                            keys: {
                                x: 'Creationtime',
                                value: ['Tem1', 'Tem2', 'Hum1', 'Hum2']
                            }
                        },
                        point: {
                            show: false
                        },
                        axis: {
                            x: {
                                type: "timeseries",
                                tick: {
                                    culling: {
                                        max: 5 // the number of tick texts will be adjusted to less than this value

                                    },
                                    format: '%Y-%m-%d %H:%M:%S'
                                }

                            }
                        }
                    });
            },
            function (response) {
                $scope.message = "Error: " + response.status + "" + response.statusText;
            }
        );
    }])




;