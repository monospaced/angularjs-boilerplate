import { module } from 'angular';

class ComponentController {
  constructor() {
    this.about = 'About';
  }
}

const options = {
  controller: ComponentController,
  template: `
    <section class="About">{{$ctrl.about}}</section>
  `,
};

export default module('app.about', []).component('about', options).name;
