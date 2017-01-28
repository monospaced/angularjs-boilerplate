import data from './data.js';

export default ($locationProvider, $stateProvider, $urlMatcherFactoryProvider, $urlRouterProvider) => {
  'ngInject';

  $locationProvider.html5Mode({ enabled: true, requireBase: false });

  $urlMatcherFactoryProvider.strictMode(false);

  $urlRouterProvider.otherwise('/');

  $stateProvider
  .state('app', {
    absract: true,
    resolve: {
      props: () => data,
    },
  })
  .state('Home', {
    parent: 'app',
    url: '/',
    views: {
      '@': 'home',
      'banner@': 'navigation',
    },
  })
  .state('About', {
    parent: 'app',
    url: '/about',
    views: {
      '@': 'about',
      'banner@': 'navigation',
    },
  });
};
