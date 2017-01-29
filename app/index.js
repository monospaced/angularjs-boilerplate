import angular from 'angular';
import router from 'angular-ui-router';
import 'normalize.css';
import './theme/app.css';
import './assets/favicon.ico';
import routes from './routes';
import scrollBehaviour from './services/scrollBehaviour';
import nav from './components/nav/nav';
import home from './components/home/home';
import about from './components/about/about';
import section from './components/section/section';

angular.module('app', [
  router,
  scrollBehaviour,
  nav,
  home,
  about,
  section,
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
