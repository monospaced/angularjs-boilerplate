import angular from 'angular';
import { AboutComponent } from './about.component';

export const AboutModule = angular
  .module('about', [])
  .component('about', AboutComponent)
  .config(($stateProvider) => {
    'ngInject';
    $stateProvider
    .state('About', {
      parent: 'app',
      url: '/about',
      views: {
        '@': 'about',
      },
    });
  })
  .name;
