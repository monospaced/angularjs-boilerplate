import { module } from 'angular';

const section = {
  bindings: {
    content: '<',
  },
  template: `
    {{$ctrl.content}}
  `,
};

export default module('mnspcd.section', []).component('section', section).name;
