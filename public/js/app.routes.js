(function () {
    'use strict';

    angular.module('scriptWarsApp')
        .config(configRoutes);

    configRoutes.$inject = ['$stateProvider', '$urlRouterProvider'];
    function configRoutes($stateProvider, $urlRouterProvider) {

        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'partials/home.partial.html',
                controller: 'SignUpController',
                controllerAs: 'vm'
            })
            .state('list', {
                url: '/list',
                params: {
                    name: '',
                    side: ''
                },
                templateUrl: 'partials/films.partial.html',
                controller: 'FilmsController',
                controllerAs: 'vm'
            })
            .state('results', {
                url: '/results',
                params: {
                    name: '',
                    side: ''
                },
                templateUrl: 'partials/results.partial.html',
                controller: 'ResultsController',
                controllerAs: 'vm',
                resolve: {
                    results: ['VotingService', function (VotingService) {
                        return VotingService.getResults();
                    }]
                }
            });

        $urlRouterProvider.otherwise('/');
    }

})();