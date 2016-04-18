/* Copyright (C) Simply.info
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Pavel Zinovev <zombiqwerty@yandex.ru>, March 2016
 */

import angular from 'angular';

/**
 * @constructor
 */
const Service = ($document) => {
  "ngInject";

  class TitleService {
    static setTitle({newTitle = '', defaultTitle = 'Angular Webpack Starter Kit', divider = ' -- '} = params) {
      document.title = newTitle + (newTitle ? divider : '') + defaultTitle;
    }
  }

  return {
    setTitle: TitleService.setTitle
  };
};

export default angular.module('Starter.App.TitleService', []).factory('TitleService', Service).name;
