import '../assets/props.json';
import '../assets/favicon.ico';
import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngRedux from 'ng-redux';
import { ApiMiddleware } from './store/middleware'
import { AppActions } from './store/actions/app.actions';
import { RootReducer } from './store/reducers'
import { AppScroll } from './app-scroll.directive';
import { AppComponent } from './app.component';
import { ComponentsModule } from './components/components.module';

export const AppModule = angular
  .module('mnspcd', [
    uiRouter,
    ngRedux,
    ComponentsModule,
  ])
  .factory('ApiMiddleware', ApiMiddleware)
  .value('AppActions', AppActions)
  .directive('appScroll', AppScroll)
  .component('app', AppComponent)
  .config($ngReduxProvider => {
    'ngInject';
    $ngReduxProvider.createStoreWith(RootReducer, [ 'ApiMiddleware' ])
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
