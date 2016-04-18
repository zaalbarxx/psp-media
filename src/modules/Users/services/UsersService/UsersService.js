import angular from 'angular';
import ApiService from './../../../Starter/services/ApiService/ApiService';
/**
 * @constructor
 */
const Service = (ApiService) => {
  "ngInject";
  class UsersService {
    static getAll() {
      return ApiService.get('users');
    }

    static create(course) {
      return ApiService.post('users', course);
    }
  }
  return {
    getAll: UsersService.getAll,
    create: UsersService.create
  };
};

export default angular.module('Starter.App.UsersService', [ApiService]).factory('UsersService', Service).name;
