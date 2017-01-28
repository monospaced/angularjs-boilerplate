import angular from 'angular';
import router from 'angular-ui-router';
import './assets/favicon.ico';
import 'normalize.css';
import './theme/app.css';
import routes from './routes.js';
import scrollBehaviour from './services/scrollBehaviour.js';
import navigation from './components/navigation/navigation';
import home from './components/home/home';
import about from './components/about/about';

angular.module('app', [
  router,
  scrollBehaviour,
  navigation,
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
