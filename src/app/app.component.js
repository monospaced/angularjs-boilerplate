import 'normalize.css';
import './app.css';

export const AppComponent = {
  template: `
    <nav class="Nav"></nav>
    <div data-ui-view></div>
  `,
  controller: class AppComponent {
    constructor($transitions, ScrollBehaviour) {
      'ngInject';
      this.$transitions = $transitions;
      this.ScrollBehaviour = ScrollBehaviour;
    }
    $onInit() {
      this.$transitions.onStart({}, (transition) => {
        this.ScrollBehaviour.saveState = false;
        transition.promise.finally(this.ScrollBehaviour.updateScroll);
      });
    }
  },
};
