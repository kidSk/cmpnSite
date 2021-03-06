(function () {
  'use strict';

  /**
   * Introduce the publicApp.user module
   * and configure it.
   *
   * @requires ngResource
   * @requires ui.router
   * @requires {publicApp.admin.user.list}
   * @requires {publicApp.admin.user.create}
   */
  angular
    .module('publicApp.admin.user', [
      'ngResource',
      'ui.router',
      'publicApp.admin.user.list',
      'publicApp.admin.user.create'
    ])
    .config(configUserRoutes);

  // inject configUserRoutes dependencies
  configUserRoutes.$inject = ['$urlRouterProvider', '$stateProvider'];

  /**
   * Route configuration function configuring the passed $stateProvider.
   * Register the abstract user state with the user template
   * paired with the UserController as 'index'.
   * The injectable 'users' is resolved as a list of all users
   * and can be injected in all sub controllers.
   *
   * @param {$urlRouterProvider} $urlRouterProvider - The URL router provider to redirect to the main state
   * @param {$stateProvider} $stateProvider - The state provider to configure
   */
  function configUserRoutes($urlRouterProvider, $stateProvider) {
    // The user state configuration
    var userState = {
      name: 'admin.user',
      parent: 'admin',
      url: '/user',
      abstract: true,
      templateUrl: 'app/admin/user/user.html',
      controller: 'UserController',
      controllerAs: 'index'
    };

    $urlRouterProvider.when('/admin/user', '/admin/user/');
    $stateProvider.state(userState);
  }

})();
