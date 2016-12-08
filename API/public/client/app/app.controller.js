/**
 * @ngdoc controller
 * @name publicApp.controller:AppController
 * @description
 * This is the application wide controller of the publicApp application
 */

(function () {
  'use strict';

  // register the controller as AppController
  angular
    .module('publicApp')
    .controller('AppController', AppController);

  /**
   * @ngdoc function
   * @name publicApp.provider:AppController
   * @description
   * Provider of the {@link publicApp.controller:AppController AppController}
   *
   * @param {Auth} Auth - The authentication service used for logging out
   * @param {$location} $mdSidenav - The sidenav service used to communicate with the sidenav components
   */

  AppController.$inject = ['Auth', '$mdSidenav', '$scope', '$filter'];

  function AppController(Auth, $mdSidenav, $scope, $filter) {
    $scope.applyFilter = function(model, filterName) {
      if (!filterName) return model;
      var filter = angular.isString(filterName) ? {
        name: filterName,
      } : angular.copy(filterName);
      filter.args = [model].concat(filter.args || []);
      return $filter(filter.name).apply(null, filter.args);
    };

    var vm = this;

    vm.sidenavId = 'mainMenu';

    /**
     * @ngdoc function
     * @name logout
     * @methodOf publicApp.controller:AppController
     * @description
     * Logout the current user
     */
    vm.logout = Auth.logout;

    /**
     * @ngdoc function
     * @name isLoggedIn
     * @methodOf publicApp.controller:AppController
     * @description
     * See {@link components/auth.service:Auth#isLoggedIn isLoggedIn} of the Auth service
     */
    vm.isLoggedIn = Auth.isLoggedIn;

    /**
     * @ngdoc function
     * @name closeMainMenu
     * @methodOf publicApp.controller:AppController
     * @description
     * Close the main menu sidenav component
     * @returns {Promise} The promise from mdSidenav
     */
    vm.closeMainMenu = closeMainMenu;

    /**
     * @ngdoc function
     * @name openMainMenu
     * @methodOf publicApp.controller:AppController
     * @description
     * Open the main menu sidenav component
     * @returns {Promise} The promise from mdSidenav
     */
    vm.openMainMenu = openMainMenu;

    /**
     * @ngdoc function
     * @name currentUser
     * @methodOf publicApp.controller:AppController
     * @description
     * See {@link components/auth.service:Auth#getCurrentUser getCurrentUser} of the Auth service
     */
    vm.currentUser = Auth.getCurrentUser();

    /**
     * Close the main menu sidenav component
     */
    function closeMainMenu() {
      return $mdSidenav(vm.sidenavId).close();
    }

    /**
     * Open the main menu sidenav component
     */
    function openMainMenu() {
      return $mdSidenav(vm.sidenavId).open();
    }
  }
})();
