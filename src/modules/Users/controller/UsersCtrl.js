/**
 * @module Controller for page home of public section layout.
 * @class HomeController
 */
export default class UsersController {
  /**
   * @constructor
   * @param {object} TitleService - Controlling our title.
   */
  constructor(TitleService, Users) {
    "ngInject";

    TitleService.setTitle({
      newTitle: 'Users List'
    });

    this.users = Users;
  }
  
}
