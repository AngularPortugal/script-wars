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
        vm.selectedSide = '';

        vm.submit = function () {
            if (vm.name !== '' && vm.selectedSide !== '') {
                $window.alert('Processing registration data for ' + vm.name + '...\nWelcome to the ' + vm.selectedSide + ' side!');
                $state.go('list', { name: vm.name, side: vm.selectedSide });
            }
            else {
                $window.alert('Please fill in your name and side!');
            }
        };
    }

})();
