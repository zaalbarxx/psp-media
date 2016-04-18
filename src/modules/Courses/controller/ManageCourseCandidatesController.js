/**
 * @module Controller for page home of public section layout.
 * @class HomeController
 */
export default class ManageCourseCandidatesController {
  /**
   * @constructor
   * @param {object} TitleService - Controlling our title.
   */
  constructor(Course, Users, CoursesService, toastr) {
    "ngInject";
    Object.assign(this, {CoursesService, toastr});
    
    this.course = Course;
    this.users = Users;
    this.newCandidateId = null;
  }
  
  remove(candidate, index) {
    this.CoursesService.removeCandidateFromCourse(this.course.id, candidate.id).then((response) => {
      this.course.candidates.splice(index, 1);
    }).catch((e) => {
      this.toastr.error(e.message);
    })
  }

  add() {
    const candidate = this.users.find(user => user.id == this.newCandidateId);
    this.CoursesService.addCandidateToCourse(this.course.id, this.newCandidateId).then((response) => {
      this.course.candidates.push(candidate);
      this.users = this.users.filter((user) => user != candidate);
      this.newCandidateId = null;
    }).catch((e) => {
      this.toastr.error(e.message);
    });
  }
}
