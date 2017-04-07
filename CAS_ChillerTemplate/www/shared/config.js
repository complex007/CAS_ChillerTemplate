angular
    .module('CASChillerApp')
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            // config route for the default page
            .state('login', {
                url: '/',
                views: {
                    'header': {
                        templateUrl: 'shared/shared_login/login_header.html',
                        controller: 'ConsoleController'
                    },

                    'content': {
                        templateUrl: "shared/shared_login/login.html",
                        controller: 'LoginCtrl'
                       
                    },
                    'footer': {
                        templateUrl: 'shared/footer.html'
                    }
                }

            })
            

            .state('app', {
                url: '/console',
                views: {
                    'header': {
                        templateUrl: 'shared/header.html',
                        controller: 'ConsoleController'
                    },
                  
                    'content': {
                        templateUrl: 'modules/m_console/console.html',
                        controller: 'ConsoleController'
                    },
                    'footer': {
                        templateUrl: 'shared/footer.html'
                    }
                }
            })

            .state('app.FacilityCAS', {
                url: '/facilitycas',
                views: {
                    'header@': {
                        templateUrl: 'shared/header.html',
                        controller: 'FacilityCtrl'
                    },
                    'content@': {
                        templateUrl: 'modules/m_facility/facilityforCAS.html',
                        controller:'FacilityCtrl'
                    }                 
                }
            })
            



            .state('app.FacilityCAS.Detail', {
                url: '/:facilityid',
                views: {
                    'header@': {
                        templateUrl: 'shared/header.html',
                        controller: 'FacilityDetailCtrl'
                    },
                    'content@': {
                        templateUrl: 'modules/m_facility/facilityDetailForCAS.html',
                        controller: 'FacilityDetailCtrl'
                    }

                }
            })
            .state('app.FacilityChiller', {
                url: '/facilitychiller',
                views: {
                    'header@': {
                        templateUrl: 'shared/header.html',
                        controller: 'FacilityCtrl'
                    },
                    'content@': {
                        templateUrl: 'modules/m_facility/facilityforChiller.html',
                        controller: 'FacilityCtrl'
                    }

                }
            })
            .state('app.FacilityChiller.NewFacility', {
                url: '/newfacility',
                views: {
                    'header@': {
                        templateUrl: 'shared/header.html',
                        controller: 'AddFacilityCtrl'
                    },
                    'content@': {
                        templateUrl: 'modules/m_facility/addFacilityForChiller.html',
                        controller: 'AddFacilityCtrl'
                    }
                }
            })
            .state('app.FacilityChiller.Detail', {
                url: '/:facilityid',
                views: {
                    'header@': {
                        templateUrl: 'shared/header.html',
                        controller: 'FacilityDetailCtrl'
                    },
                    'content@': {
                        templateUrl: 'modules/m_facility/facilityDetailForChiller.html',
                        controller: 'FacilityDetailCtrl'
                    }

                }
            })


            .state('app.CompressedAirSystem', {
                url: '/CAS',
                views: {

                    'content@': {
                        templateUrl: 'modules/m_CAS/CAS.html'
                    }

                }
            })


            .state('app.PerformanceMeasurement', {
                url: '/performancemeasurement',
                views: {

                    'content@': {
                        templateUrl: 'modules/m_compressor/compressor.html'
                    }

                }
            })


            .state('app.EnergyConservationMeasuresCalculation', {
                url: '/calculation',
                views: {

                    'content@': {
                        templateUrl: 'modules/m_calculation/calculation.html'
                    }

                }
            })


            .state('app.LifeCycle', {
                url: '/lifecircle',
                views: {
                    
                    'content@': {
                        templateUrl: 'modules/m_lifecircle/lifecircle.html'
                    }

                }
            })


            .state('app.Settings', {
                url: '/settings',
                views: {

                    'content@': {
                        templateUrl: 'modules/m_settings/settings.html'
                    }

                }
            })

           

         $urlRouterProvider.otherwise('/');

    })
    .run(function(editableOptions) {
        editableOptions.theme = 'bs3'; // bootstrap3 theme. Can be also 'bs2', 'default'
    })



    ;
   