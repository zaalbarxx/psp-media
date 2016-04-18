import angular from 'angular';
import ApiService from './../../../Starter/services/ApiService/ApiService';
import moment from 'moment';
import each from 'lodash/each';
/**
 * @constructor
 */
const Service = (ApiService) => {
  "ngInject";
  class CoursesService {
    static getAll() {
      return ApiService.get('courses');
    }

    static getById(id) {
      return ApiService.get(`courses/${id}`);
    }

    static create(course) {
      const dates = ['begin', 'end'];
      each(dates, (date) => course[date] = moment( course[date], 'YYYY-MM-dd').unix() );
      return ApiService.post('courses', course);
    }
    static removeCandidateFromCourse(courseId, candidateId) {
      return ApiService.delete(`courses/${courseId}/register`, {id_user: candidateId});
    }
    static addCandidateToCourse(courseId, candidateId) {
      return ApiService.post(`courses/${courseId}/register`, {id_user: candidateId});
    }
  }
  return {
    getAll: CoursesService.getAll,
    getById: CoursesService.getById,
    create: CoursesService.create,
    removeCandidateFromCourse: CoursesService.removeCandidateFromCourse,
    addCandidateToCourse: CoursesService.addCandidateToCourse
  };
};

export default angular.module('Starter.App.CoursesService', [ApiService]).factory('CoursesService', Service).name;
