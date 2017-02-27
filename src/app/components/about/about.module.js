import angular from 'angular';
import uiRouter from 'angular-ui-router';
import { AboutComponent } from './about.component';

export const AboutModule = angular
  .module('about', [ uiRouter ])
  .component('about', AboutComponent)
  .config($stateProvider => {
    'ngInject';
    $stateProvider
      .state('About', {
        parent: 'app',
        url: '/about',
        views: { '@': 'about' },
      });
  })
  .name;
