import { module } from 'angular';
import '../main/main.css';
import section from '../section/section';

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

export default module('app.home', [
  section,
]).component('home', home).name;
