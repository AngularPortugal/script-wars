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
                templateUrl: 'partials/films.partial.html'
            });

        $urlRouterProvider.otherwise('/');
    }

})();