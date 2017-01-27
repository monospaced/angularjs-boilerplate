export default ($stateProvider) => {
  'ngInject';
  $stateProvider
  .state('app', {
    url: '/',
    views: {
      'main@': {
        template: require('./Home.html'),
        controller: 'HomeController',
        controllerAs: 'home',
      },
    },
  });
};
