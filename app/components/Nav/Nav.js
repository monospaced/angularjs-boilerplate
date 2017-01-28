import { module } from 'angular';

const nav = {
  template: `
    <a href="/">Home</a> | <a href="/about">About</a>
  `,
  controller: class NavComponent {
    constructor() {}
  },
};

export default module('app.nav', []).component('nav', nav).name;
