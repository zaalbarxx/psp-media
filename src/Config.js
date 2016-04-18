/**
 * @module Config
 * @see Application
 * @param {Object} stateHelperProvider - Ui-router module for right nesting.
 * @param {Object} $urlRouterProvider - Configures how the application routing.
 * @param {Object} $locationProvider - Configures how the application deep linking paths are stored.
 * @param {Object} $logProvider - Configures how the application logs messages.
 */
const Config = (stateHelperProvider, $urlRouterProvider, $locationProvider, $logProvider) => {
    "ngInject";

    $logProvider.debugEnabled(true);
    /** Turn debug mode on/off */
    $locationProvider.html5Mode(true);
    /** Turn html5 mode on */
    $urlRouterProvider.otherwise('/home');
    /** If current route not in routes then redirect to home */
    /**
     * Url processing.
     * @param {Object} $injector - Ability to inject providers.
     * @param {Object} $location - Current location.
     */
    $urlRouterProvider.rule(($injector, $location) => {
        const path = $location.path();
        /** If route like as /home/ then /home */
        $location.path(path[path.length - 1] === '/' ? path.slice(0, -1) : path).replace();
    });


    stateHelperProvider /** Describe our states */
        .state({
            url: '/',
            name: 'home',
            controller: 'HomeController',
            controllerAs: 'Home',
            template: require('./modules/Home/views/home.jade')()
        })
        .state({
          name: 'users',
          template: "<ui-view></ui-view>",
          children: [
              {
                  url: '/users',
                  name: 'index',
                  controller: 'UsersController',
                  controllerAs: 'UsersCtrl',
                  template: require('./modules/Users/views/index.jade')(),
                  resolve: {
                      Users: (UsersService) => {
                          return UsersService.getAll().then((response) => response.users);
                      }
                  }
              },
              {
                  url: '/users/create',
                  name: 'create',
                  controller: 'CreateUserController',
                  controllerAs: 'CreateUserCtrl',
                  template: require('./modules/Users/views/create.jade')()
              }
          ]
        })
        .state({
            name: 'courses',
            template: "<ui-view></ui-view>",
            children: [
                {
                    url: '/courses',
                    name: 'index',
                    controller: 'CoursesController',
                    controllerAs: 'CoursesCtrl',
                    template: require('./modules/Courses/views/index.jade')(),
                    resolve: {
                        Courses: (CoursesService) => {
                            return CoursesService.getAll().then((response) => response.courses);
                        }
                    }
                },
                {
                    url: '/courses/create',
                    name: 'create',
                    controller: 'CreateCourseController',
                    controllerAs: 'CreateCourseCtrl',
                    template: require('./modules/Courses/views/create.jade')(),
                }
            ]
        })
    ;
};

/** Export our config */
export default Config;
