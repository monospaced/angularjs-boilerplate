import '../assets/favicon.ico';
import angular from 'angular';
import uiRouter from 'angular-ui-router';
import { AppComponent } from './app.component';
import { AppScroll } from './app-scroll.directive';
import { ComponentsModule } from './components/components.module';

export const AppModule = angular
  .module('mnspcd', [
    uiRouter,
    ComponentsModule,
  ])
  .component('app', AppComponent)
  .directive('appScroll', AppScroll)
  .config(($locationProvider, $stateProvider, $urlMatcherFactoryProvider, $urlRouterProvider) => {
    'ngInject';
    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false,
    });
    $urlMatcherFactoryProvider.strictMode(false);
    $urlRouterProvider.otherwise('/');
    $stateProvider
      .state('app', {
        abstract: true,
        resolve: { props: () => require('./app.data.js') },
      });
  })
  .name;
