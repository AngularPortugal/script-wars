(function () {
    'use strict';

    angular.module('scriptWarsApp')
        .controller('MainController', MainController);

    MainController.$inject = ['$rootScope'];
    function MainController($rootScope) {
        var vm = this;

        vm.currentView = 'home';

        $rootScope.$on('app.view.change', function (event, args) {
            vm.currentView = args.view;
        });
    }

})();
