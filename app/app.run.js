export default ($anchorScroll, $location, $rootScope, $state, $timeout, $window) => {
  'ngInject';
  const scrollState = {};
  const scrollOffset = 0;
  let popped = false;
  let saveScrollState = true;
  $window.onpopstate = () => {
    popped = true;
  };
  $window.onscroll = () => {
    if (saveScrollState) {
      scrollState[$location.path()] = $window.pageYOffset;
    }
  };
  $rootScope.$on('$stateChangeStart', (event, toState, toParams, fromState) => {
    saveScrollState = false;
  });
  $rootScope.$on('$stateChangeSuccess', (event, toState, toParams, fromState, fromParams) => {
    $rootScope.viewName = (toState.name).replace(/\./g, '-');
    if (fromState.name) {
      $rootScope.navigated = true;
    }
    $timeout(() => {
      var path;
      if (popped) {
        $location.search('anchor', null);
        path = $location.path();
        $window.scrollTo(0, scrollState[path] ? scrollState[path] : 0);
        popped = false;
      } else {
        if (toParams.anchor) {
          $anchorScroll.yOffset = scrollOffset;
          $anchorScroll(toParams.anchor);
        } else {
          $window.scrollTo(0, 0);
        }
      }
      saveScrollState = true;
    });
  });
  $rootScope.$on('$stateChangeError', (event, toState, toParams, fromState, fromParams, error) => {
    throw error;
  });
};
