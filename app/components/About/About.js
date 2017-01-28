import { module } from 'angular';

const about = {
  template: `
    <section class="About">{{$ctrl.about}}</section>
  `,
  controller: class AboutComponent {
    constructor() {
      this.about = 'About';
    }
  },
};

export default module('app.about', []).component('about', about).name;
