import { module } from 'angular';

class ComponentController {
  constructor() {
    this.title = 'Mnspcd Angular 1 Boilerplate';
  }
}

const options = {
  controller: ComponentController,
  template: `
    <section class="Home">{{$ctrl.title}}</section>
  `,
};

export default module('app.home', []).component('home', options).name;
