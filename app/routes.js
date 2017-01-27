export default ($locationProvider, $stateProvider, $urlMatcherFactoryProvider, $urlRouterProvider) => {
  'ngInject';

  $locationProvider.html5Mode({ enabled: true, requireBase: false });

  $urlMatcherFactoryProvider.strictMode(false);

  $urlRouterProvider.otherwise('/');

  $stateProvider
  .state('app', {
    url: '/',
    views: {
      'main': 'home',
      'nav': 'nav',
    },
  })
  .state('about', {
    url: '/about',
    views: {
      'main': 'about',
      'nav': 'nav',
    },
  });
};
