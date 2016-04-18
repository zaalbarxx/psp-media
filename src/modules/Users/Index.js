/*
 * Javascripts
 * ========================================================================== */

import angular        from 'angular';
import UsersController from './controller/UsersCtrl';
import CreateUserController from './controller/CreateUserCtrl';
import UsersService from './services/UsersService/UsersService';
import Buttons from 'angular-ui-bootstrap/src/buttons';
/*
 * Stylesheets
 * ========================================================================== */

/* ========================================================================== */

/**
 * Define home page module.
 * @param {String} moduleName.
 * @param {Array} dependencies.
 * @export Module name - name of this module.
 */
export default angular.module('Starter.App.Users', [UsersService, Buttons])
  .controller('UsersController', UsersController)
  .controller('CreateUserController', CreateUserController)
  .name;
