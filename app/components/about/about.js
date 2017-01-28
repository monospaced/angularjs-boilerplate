import { module } from 'angular';
import '../main/main.css';

const about = {
  bindings: {
    props: '<',
  },
  template: `
    <main class="Main">{{$ctrl.props.about}}</main>
  `,
};

export default module('app.about', []).component('about', about).name;
