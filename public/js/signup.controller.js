(function () {
    'use strict';

    /*
    * NOTE:
    * You can use the array syntax or the function syntax
    * to indicate the dependencies that should be injected
    * into your function
    *
    * Array syntax:
    *   angular.module('scriptWarsApp')
    *     .controller('SignUpController', ['$window', SignUpController]);
    *
    * Function syntax:
    *   angular.module('scriptWarsApp')
    *     .controller('SignUpController', SignUpController);
    *
    *   SignUpController.$inject = ['$window'];
    *
    */

    angular.module('scriptWarsApp')
        .controller('SignUpController', SignUpController);

    SignUpController.$inject = ['$window', '$state'];
    function SignUpController($window, $state) {
        var vm = this;

        vm.name = '';
        vm.selectedSide = null;

        vm.submit = function () {
            $window.alert('Processing registration data for ' + vm.name + '...\nWelcome to the ' + vm.selectedSide + ' side!');

            $state.go('list');
        };
    }

})();
