import { module } from 'angular';
import './nav.css';

const nav = {
  template: `
    <ul>
      <li ng-repeat="route in $ctrl.routes">
        <a href="{{route.url}}">{{route.name}}</a>
      </li>
    </ul>
  `,
  controller: class NavComponent {
    constructor($state) {
      'ngInject';
      this.routes = $state.get().filter((item) => {
        return !item.abstract && item.url;
      });
    }
  },
};

export default module('mnspcd.nav', []).component('nav', nav).name;
