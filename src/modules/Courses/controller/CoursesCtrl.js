/**
 * @module Controller for page home of public section layout.
 * @class HomeController
 */
export default class CoursesController {
  /**
   * @constructor
   * @param {object} TitleService - Controlling our title.
   */
  constructor(TitleService, Courses, UsersService, $uibModal) {
    "ngInject";
    Object.assign(this, {$uibModal, UsersService});
    TitleService.setTitle({
      newTitle: 'Courses List'
    });

    this.courses = Courses;
  }

  manageCourseCandidates(course) {
    const modalInstance = this.$uibModal.open({
      template: require('./../views/manageCandidates.jade')(),
      controller: 'ManageCourseCandidatesController as ManageCandidatesCtrl',
      resolve: {
        Course: () => {
          return course;
        },
        Users: () => {
          return this.UsersService.getAll().then((response) => response.users);
        }
      }
    });
  }
}
