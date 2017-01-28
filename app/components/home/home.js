import { module } from 'angular';
import '../main/main.css';

const home = {
  bindings: {
    props: '<',
  },
  template: `
    <main class="Main">{{$ctrl.props.title}}</main>
  `,
};

export default module('app.home', []).component('home', home).name;
