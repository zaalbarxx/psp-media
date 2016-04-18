import angular from 'angular';
import assign from 'lodash/assign';
/**
 * @constructor
 */
const Service = ($http) => {
  "ngInject";
  const API_ENDPOINT = 'http://private-anon-df19724b4-coursemgmt.apiary-mock.com/';
  const parseResponse = function parseResponse(response) {
    return response.data.data;
  }
  class ApiService {
    static get(url, ...args) {
      return $http.get(`${API_ENDPOINT}${url}`, ...args).then(parseResponse);
    }
    static post(url, data, ...args) {
      return $http.post(`${API_ENDPOINT}${url}`, data, ...args).then(parseResponse);
    }
    static put(url, data, ...args) {
      return $http.post(`${API_ENDPOINT}${url}`, data, ...args).then(parseResponse);
    }
    static delete(url, data, ...args) {
      return $http.post(`${API_ENDPOINT}${url}`, data, ...args).then(parseResponse);
    }
  }

  return {
    get: ApiService.get,
    post: ApiService.post,
    put: ApiService.put,
    delete: ApiService.delete,
  };
};

export default angular.module('Starter.App.ApiService', []).factory('ApiService', Service).name;
