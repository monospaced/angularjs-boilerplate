import './assets/favicon.ico';
import angular from 'angular';
import router from 'angular-ui-router';
import routes from './routes';
import scrollBehaviour from './services/scrollBehaviour';
import app from './components/app/app';

angular.module('mnspcd', [
  router,
  scrollBehaviour,
  app,
])
.config(routes)
.run(runBlock);

function runBlock($transitions, scrollBehaviour) {
  'ngInject';
  $transitions.onStart({}, (transition) => {
    scrollBehaviour.saveState = false;
    transition.promise.finally(scrollBehaviour.updateScroll);
  });
}
