export default ($locationProvider, $urlRouterProvider) => {
  $locationProvider.html5Mode({
    enabled: true,
    hashPrefix: '!',
    requireBase: false,
  });
  $urlRouterProvider
  .rule(($injector, $location) => {
    const path = $location.url();
    if (path[path.length - 1] === '/' || path.indexOf('/?') > -1) {
      return;
    }
    if (path.indexOf('?') > -1) {
      return path.replace('?', '/?');
    }
    return path + '/';
  })
  .otherwise('/');
};
