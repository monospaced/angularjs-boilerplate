(function() {
  'use strict';

  angular
  .module('app', [
    'ui.router',
  ])
  .config([
    '$locationProvider',
    '$stateProvider',
    '$urlRouterProvider',
    function($locationProvider,
             $stateProvider,
             $urlRouterProvider) {

      $locationProvider.html5Mode({
        enabled: true,
        hashPrefix: '!',
        requireBase: false,
      });

      $stateProvider
      .state('app', {
        url: '/',
        views: {
          'main@': {
            templateUrl: '/views/home/home.html',
            controller: 'HomeCtrl',
          },
        },
      });

      $urlRouterProvider
      .rule(function ($injector, $location) {
        var path = $location.url();

        if (path[path.length - 1] === '/' || path.indexOf('/?') > -1) {
          return;
        }

        if (path.indexOf('?') > -1) {
          return path.replace('?', '/?');
        }

        return path + '/';
      })
      .otherwise('/');
    },
  ])
  .run([
    '$rootScope', '$state', '$location', '$timeout', '$window', '$anchorScroll',
    function($rootScope, $state, $location, $timeout, $window, $anchorScroll) {

      var scrollState = {};
      var saveScrollState = true;
      var scrollOffset = 0;
      var popped = false;

      $window.onpopstate = function() {
        popped = true;
      };

      $window.onscroll = function() {
        if (saveScrollState) {
          scrollState[$location.path()] = $window.pageYOffset;
        }
      };

      $rootScope.$on('$stateChangeStart',
        function (event, toState, toParams, fromState) {
          saveScrollState = false;
        }
      );

      $rootScope.$on('$stateChangeSuccess',
        function(event, toState, toParams, fromState, fromParams) {

          $rootScope.viewName = (toState.name).replace(/\./g, '-');

          if (fromState.name) {
            $rootScope.navigated = true;
          }

          $timeout(function() {
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
        }
      );

      $rootScope.$on('$stateChangeError',
        function (event, toState, toParams, fromState, fromParams, error) {
          if (error.message === 'Not available') {
            // fail whale!
            $rootScope.isError = error.message;
            return $state.go('app');
          }
          throw error;
        }
      );
    },
  ]);

  function handleRouteError(error) {
    throw new Error((error.data && error.data.errors && error.data.errors[0].detail) || 'Not available');
  }
}());
