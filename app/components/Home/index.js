import angular from 'angular';

import routing from './home.routes';
import HomeController from './home.controller';
import './Home.css';

export default angular.module('app.home', [])
.config(routing)
.controller('HomeController', HomeController)
.name;
