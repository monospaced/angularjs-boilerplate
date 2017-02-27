import angular from 'angular';

export const appScroll = ($location, $timeout, $transitions, $window) => {
  'ngInject';
  return {
    restrict: 'A',
    link() {
      let popped = false;
      let saveScroll = true;
      const scrollStorage = {};
      const updateScroll = () => {
        $timeout(() => {
          const scrollY = (popped && scrollStorage[$location.path()]);
          $window.scrollTo(0, scrollY || 0);
          popped = false;
          saveScroll = true;
        });
      };
      $window.onpopstate = () => {
        popped = true;
      };
      $window.onscroll = () => {
        if (saveScroll) {
          scrollStorage[$location.path()] = $window.pageYOffset;
        }
      };
      $transitions.onStart({}, (transition) => {
        saveScroll = false;
        transition.promise.finally(updateScroll);
      });
    },
  };
};
