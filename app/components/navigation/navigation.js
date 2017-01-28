import { module } from 'angular';
import './navigation.css';

const navigation = {
  template: `
    <nav class="Nav">
      <ul>
        <li ng-repeat="route in $ctrl.routes">
          <a href="{{route.url}}">{{route.name}}</a>
        </li>
      </ul>
    </nav>
  `,
  controller: class NavigationComponent {
    constructor($state) {
      'ngInject';
      this.routes = $state.get().filter((item) => {
        return !item.abstract && item.url;
      });
    }
  },
};

export default module('app.navigation', []).component('navigation', navigation).name;
