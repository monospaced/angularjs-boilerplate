import { module } from 'angular';
import 'normalize.css';
import './app.css';
import nav from '../nav/nav';
import home from '../home/home';
import about from '../about/about';

const app = {
  template: `
    <nav class="Nav"></nav>
    <div data-ui-view></div>
  `,
};

export default module('mnspcd.app', [
  nav,
  home,
  about,
]).component('app', app).name;
