import { module } from 'angular';

class ScrollBehaviour {
  constructor($location, $timeout, $window) {
    'ngInject';
    this.$location = $location;
    this.$timeout = $timeout;
    this.$window = $window;
    this.stateStorage = {};
    this.popped = false;
    this.saveState = true;
    this.updateScroll = this.updateScroll.bind(this);
    $window.onpopstate = () => {
      this.popped = true;
    };
    $window.onscroll = () => {
      if (this.saveState) {
        this.stateStorage[$location.path()] = $window.pageYOffset;
      }
    };
  }
  updateScroll() {
    this.$timeout(() => {
      const scrollY = (this.popped && this.stateStorage[this.$location.path()]);
      this.$window.scrollTo(0, scrollY || 0);
      this.popped = false;
      this.saveState = true;
    });
  }
}

export default module('scroll-behaviour', []).service('scrollBehaviour', ScrollBehaviour).name;
