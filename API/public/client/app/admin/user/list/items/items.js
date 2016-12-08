  /**
   * @ngdoc overview
   * @name publicApp.admin.user.list.items
   * @requires ui.router
   * @requires components/listImage
   *
   * @description
   * The `publicApp.admin.user.list.items` module which provides:
   *
   * - {@link publicApp.admin.user.list.items.controller:UserItemsController UserItemsController}
   */

(function () {
  'use strict';

  angular
    .module('publicApp.admin.user.list.items', [
      'ui.router',
      'publicApp.listImage'
    ]);

})();
