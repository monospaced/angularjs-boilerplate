import angular from 'angular';
import { HomeComponent } from './home.component';

export const HomeModule = angular
  .module('home', [])
  .component('home', HomeComponent)
  .config(($stateProvider) => {
    'ngInject';
    $stateProvider
      .state('Home', {
        parent: 'app',
        url: '/',
        views: { '@': 'home' },
      });
  })
  .name;
