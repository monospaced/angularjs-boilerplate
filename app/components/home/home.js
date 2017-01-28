import { module } from 'angular';
import '../main/main.css';

const home = {
  bindings: {
    props: '<',
  },
  template: `
    <main class="Main">
      <section class="Section" content="$ctrl.props.title"></section>
    </main>
  `,
};

export default module('app.home', []).component('home', home).name;
