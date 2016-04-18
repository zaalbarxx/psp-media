/*
 * Javascripts
 * ========================================================================== */

import angular        from 'angular';
import CoursesController from './controller/CoursesCtrl';
import CreateCourseController from './controller/CreateCourseCtrl';
import ManageCourseCandidatesController from './controller/ManageCourseCandidatesController';

import CoursesService from './services/CoursesService/CoursesService';
import UsersService from './../Users/services/UsersService/UsersService';

import Datepicker from 'angular-ui-bootstrap/src/datepicker';
import DatepickerPopup from 'angular-ui-bootstrap/src/datepickerPopup';
import angularNumberPicker from 'angular-number-picker';
import toastr from 'angular-toastr';
import Modal from 'angular-ui-bootstrap/src/modal';
/*
 * Stylesheets
 * ========================================================================== */

import './stylesheets/courses.scss';
/* ========================================================================== */

/**
 * Define home page module.
 * @param {String} moduleName.
 * @param {Array} dependencies.
 * @export Module name - name of this module.
 */
export default angular.module('Starter.App.Courses', [
  CoursesService, UsersService, Datepicker, DatepickerPopup, angularNumberPicker, toastr, Modal
])
  .controller('CoursesController', CoursesController)
  .controller('CreateCourseController', CreateCourseController)
  .controller('ManageCourseCandidatesController', ManageCourseCandidatesController)
  .name;
