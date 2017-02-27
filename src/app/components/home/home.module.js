import angular from 'angular';
import uiRouter from 'angular-ui-router';
import { HomeComponent } from './home.component';

export const HomeModule = angular
  .module('home', [ uiRouter ])
  .component('home', HomeComponent)
  .config($stateProvider => {
    'ngInject';
    $stateProvider
      .state('Home', {
        parent: 'app',
        url: '/',
        views: { '@': 'home' },
      });
  })
  .name;
