/**
 * @module Controller for page home of public section layout.
 * @class HomeController
 */
export default class CreateUserController {
  /**
   * @constructor
   * @param {object} TitleService - Controlling our title.
   */
  constructor(TitleService, UsersService, $state, toastr) {
    "ngInject";
    TitleService.setTitle({
      newTitle: 'Users List'
    });
    Object.assign(this, {UsersService, $state, toastr});
    this.user = {
      gender: 'm'
    };
  }
  create() {
    this.UsersService.create(this.user).then((response) => {
        this.toastr.success("User has been created!");
        this.$state.go('users.index');
    })
      .catch((error) => {
        this.toastr.error(error.message);
    });
  }
}
