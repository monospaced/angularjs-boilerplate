import '../assets/props.json';
import '../assets/favicon.ico';
import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngRedux from 'ng-redux';
import { apiMiddleware } from './middleware';
import { appReducer } from './app.reducer';
import { appScroll } from './app-scroll.directive';
import { AppActions } from './app.actions';
import { AppComponent } from './app.component';
import { ComponentsModule } from './components/components.module';

export const AppModule = angular
  .module('mnspcd', [
    uiRouter,
    ngRedux,
    ComponentsModule,
  ])
  .factory('apiMiddleware', apiMiddleware)
  .directive('appScroll', appScroll)
  .value('AppActions', AppActions)
  .component('app', AppComponent)
  .config($ngReduxProvider => {
    'ngInject';
    $ngReduxProvider.createStoreWith(appReducer, [ 'apiMiddleware' ]);
  })
  .config($locationProvider => {
    'ngInject';
    $locationProvider.html5Mode({ enabled: true, requireBase: false });
  })
  .config(($stateProvider, $urlMatcherFactoryProvider, $urlRouterProvider) => {
    'ngInject';
    $stateProvider.state('app', { abstract: true });
    $urlMatcherFactoryProvider.strictMode(false);
    $urlRouterProvider.otherwise('/');
  })
  .name;
