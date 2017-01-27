import { module } from 'angular';

class ComponentController {
  constructor() {
    this.title = 'Mnspcd Angular 1 Boilerplate';
  }
}

const options = {
  controller: ComponentController,
  template: `
    <a href="/">Home</a> | <a href="/about">About</a>
  `,
};

export default module('app.nav', []).component('nav', options).name;
