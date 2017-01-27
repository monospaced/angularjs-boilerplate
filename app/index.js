import angular from 'angular';
import router from 'angular-ui-router';
//import './assets/.htaccess';
import './assets/favicon.ico';
import 'normalize.css';
import './theme/app.css';
import routes from './routes.js';
import run from './run.js';

import nav from './components/Nav/Nav';
import home from './components/Home/Home';
import about from './components/About/About';

angular.module('app', [
  router,
  nav,
  home,
  about,
])
.config(routes)
.run(run);
