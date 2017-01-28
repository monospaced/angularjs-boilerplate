import angular from 'angular';
import router from 'angular-ui-router';
import './assets/favicon.ico';
import 'normalize.css';
import './theme/app.css';
import routes from './routes.js';
import scrollBehaviour from './services/scrollBehaviour.js';
import nav from './components/Nav/Nav';
import home from './components/Home/Home';
import about from './components/About/About';

angular.module('app', [
  router,
  scrollBehaviour,
  nav,
  home,
  about,
])
.config(routes)
.run(runBlock);

function runBlock($transitions, scrollBehaviour) {
  'ngInject';
  $transitions.onStart({}, function(trans) {
    scrollBehaviour.saveState = false;
    trans.promise.finally(scrollBehaviour.updateScroll);
  });
}
