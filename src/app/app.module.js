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
    const devtools = window.__REDUX_DEVTOOLS_EXTENSION__;
    const storeEnhancer = typeof devtools === 'function' ? [devtools()] : [];
    $ngReduxProvider.createStoreWith(appReducer, ['apiMiddleware'], storeEnhancer);
  })
  .config($locationProvider => {
    'ngInject';
    $locationProvider.html5Mode({ enabled: true, requireBase: false });
  })
  .config(($stateProvider, $urlMatcherFactoryProvider, $urlRouterProvider) => {
    'ngInject';
    $urlMatcherFactoryProvider.strictMode(false);
    $urlRouterProvider.otherwise('/');
    $stateProvider.state('app', {
      abstract: true,
      resolvePolicy: {
        async: 'NOWAIT',
        when: 'EAGER',
      },
      resolve: {
        init: $ngRedux => {
          'ngInject';
          return $ngRedux
          .dispatch(AppActions.fetchApp())
          .then(res => res);
        },
      },
    });
  })
  .name;
