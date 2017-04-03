angular
    .module('CASChillerApp')
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            // config route for the default page
            .state('login', {
                url: '/',
                views: {

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
                        templateUrl: 'shared/shared_header/header.html',
                        controller: 'ConsoleController'
                    },
                    'logout': {
                        templateUrl: 'shared/shared_logout/logout.html',
                        controller: 'LogoutController'
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
                   
                    'content@': {
                        templateUrl: 'modules/m_facilityforCAS/facilityforCAS.html',
                        controller:'FacilityCtrl'
                    }

                }
            })

            .state('app.FacilityChiller', {
                url: '/facilitychiller',
                views: {

                    'content@': {
                        templateUrl: 'modules/m_facilityforChiller/facilityforChiller.html'
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

            .state('app.testsample', {
                url: '/testsample',
                views: {
                    'header@': {
                        templateUrl: 'shared/shared_header/header.html',
                        controller: 'GraphCtrl',                       
                    },
                    'content@': {
                        templateUrl: 'modules/m_test/test.html',
                        controller: 'GraphCtrl'
                    }

                }
            });

         $urlRouterProvider.otherwise('/');

    })
    .run(function(editableOptions) {
        editableOptions.theme = 'bs3'; // bootstrap3 theme. Can be also 'bs2', 'default'
    })



    ;
   