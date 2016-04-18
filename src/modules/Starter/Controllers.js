/*
 * Javascripts
 * ========================================================================== */

import angular from 'angular';

import Layout  from './Index';
import Home    from '../Home/Index';
import Courses from '../Courses/Index';
import Users from '../Users/Index';
/**
 * Define app module.
 * @param {String} moduleName.
 * @param {Array} dependencies.
 * @export Controllers module
 */
export default angular.module('Starter.App.controllers', [
  Layout, Home, Courses, Users
]).name;
