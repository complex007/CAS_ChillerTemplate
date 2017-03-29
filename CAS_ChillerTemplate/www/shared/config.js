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
                        controller: 'LoginCtrl',
                        data: {
                            pageTitle: 'Login'
                        }
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

            .state('app.Facility for CAS', {
                url: '/facilityforCAS',
                views: {

                    'content@': {
                        templateUrl: 'modules/m_facilityforCAS/facilityforCAS.html'
                    }

                }
            })

            .state('app.Facility for Chiller', {
                url: '/facilityforChiller',
                views: {

                    'content@': {
                        templateUrl: 'modules/m_facilityforChiller/facilityforChiller.html'
                    }

                }
            })


            .state('app.Compressed Air System', {
                url: '/CAS',
                views: {

                    'content@': {
                        templateUrl: 'modules/m_CAS/CAS.html'
                    }

                }
            })


            .state('app.Compressor', {
                url: '/compressor',
                views: {

                    'content@': {
                        templateUrl: 'modules/m_compressor/compressor.html'
                    }

                }
            })


            .state('app.Energy Conservation Measures Calculation', {
                url: '/calculation',
                views: {

                    'content@': {
                        templateUrl: 'modules/m_calculation/calculation.html'
                    }

                }
            })


            .state('app.Life Cycle Analysis', {
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

                    'content@': {
                        templateUrl: 'modules/m_test/test.html',
                        controller: 'GraphCtrl'
                    }

                }
            });

         $urlRouterProvider.otherwise('/');

    })
    



    ;
   