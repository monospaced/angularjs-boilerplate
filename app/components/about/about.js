import { module } from 'angular';
import '../main/main.css';
import section from '../section/section';

const about = {
  bindings: {
    props: '<',
  },
  template: `
    <main class="Main">
      <section class="Section" content="$ctrl.props.about"></section>
    </main>
  `,
};

export default module('mnspcd.about', [
  section,
]).component('about', about).name;
