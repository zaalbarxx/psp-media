/*
 * Javascripts
 * ========================================================================== */

import angular           from 'angular';
import StarterController from './controller/StarterCtrl';

import PointerEvents     from './directives/PointerEvents/PointerEventsDirective';
import ThirdParties      from './directives/ThirdParties/ThirdPartiesDirective';
import UiSelectRequired from './directives/uiSelectRequired/uiSelectRequired';

import TitleService      from './services/TitleService/TitleService';
/*
 * Stylesheets
 * ========================================================================== */

/* Base
 * ===================================== */
import 'ui-select/dist/select.css';
import './stylesheets/fonts.scss';
import './stylesheets/globals.scss';

/* Header
 * ===================================== */

import './subModules/Header/header.scss';

/* Footer
 * ===================================== */

import './subModules/Footer/footer.scss';

/* Layout
 * ===================================== */

import './stylesheets/layout.scss';

/* ========================================================================== */

/**
 * Define app module.
 * @param {String} moduleName.
 * @param {Array} dependencies.
 * @export Module name - name of root module
 */
export default angular.module('Starter.App', [
  PointerEvents, ThirdParties, TitleService, UiSelectRequired
]).controller('StarterController', StarterController).name;
