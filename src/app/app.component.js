import 'normalize.css';
import './app.css';

export const AppComponent = {
  template: `
    <nav></nav>
    <ui-view></ui-view>
  `,
  controller: class AppComponent {
    constructor($transitions, ScrollBehaviour) {
      'ngInject';
      this.$transitions = $transitions;
      this.scrollBehaviour = ScrollBehaviour;
    }
    $onInit() {
      this.$transitions.onStart({}, (transition) => {
        this.scrollBehaviour.saveState = false;
        transition.promise.finally(this.scrollBehaviour.updateScroll);
      });
    }
  },
};
