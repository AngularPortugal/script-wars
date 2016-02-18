(function () {
    'use strict';

    angular.module('scriptWarsApp')
        .controller('MainController', MainController);

    MainController.$inject = ['$rootScope'];
    function MainController($rootScope) {
        var vm = this;

        vm.currentView = 'home';
    }

})();
