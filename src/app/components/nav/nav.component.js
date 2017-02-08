import './nav.css';

export const NavComponent = {
  template: `
    <ul class="Nav">
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
