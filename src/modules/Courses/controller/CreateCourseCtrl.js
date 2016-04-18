/**
 * @module Controller for page home of public section layout.
 * @class HomeController
 */
import moment from 'moment';
export default class CreateCourseController {
  /**
   * @constructor
   * @param {object} TitleService - Controlling our title.
   */
  constructor(TitleService, CoursesService, $state, toastr) {
    "ngInject";
    Object.assign(this, {CoursesService, $state, toastr});

    TitleService.setTitle({
      newTitle: 'Course'
    });

    this.course = {
      begin: moment(),
      end: moment(),
      candidate_limit: 0
    };

    this.dateOptions = {
      formatYear: 'yy',
      minDate: new Date(),
      startingDay: 1
    };

    this.popups = {
      begin: {
        opened: false
      },
      end: {
        opened: false
      }
    }
  }

  create() {
    this.CoursesService.create(this.course).then((response) => {
        this.toastr.success('Course has been created!');
        this.$state.go('courses.index');
      })
      .catch((e) => {
        this.toastr.error(e.message);
      });
  }

  openPopup(type) {
    this.popups[type].opened = true;
  }

}
