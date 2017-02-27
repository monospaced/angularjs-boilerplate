import '../assets/props.json';
import '../assets/favicon.ico';
import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngRedux from 'ng-redux';
import { apiMiddleware } from './store/middleware'
import { appActions } from './store/actions/app.actions';
import { rootReducer } from './store/reducers'
import { appScroll } from './app-scroll.directive';
import { AppComponent } from './app.component';
import { ComponentsModule } from './components/components.module';

export const AppModule = angular
  .module('mnspcd', [
    uiRouter,
    ngRedux,
    ComponentsModule,
  ])
  .factory('apiMiddleware', apiMiddleware)
  .value('appActions', appActions)
  .directive('appScroll', appScroll)
  .component('app', AppComponent)
  .config($ngReduxProvider => {
    'ngInject';
    $ngReduxProvider.createStoreWith(rootReducer, [ 'apiMiddleware' ])
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
