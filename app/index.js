import angular from 'angular';
import router from 'angular-ui-router';
//import './assets/.htaccess';
import './assets/favicon.ico';
import 'normalize.css';
import './theme/app.css';
import config from './app.config.js';
import run from './app.run.js';

import home from './components/Home';

angular.module('app', [
  router,
  home,
])
.config(config)
.run(run);
