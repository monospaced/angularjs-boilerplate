import angular from 'angular';
import uiRouter from 'angular-ui-router';
import { NavComponent } from './nav.component';

export const NavModule = angular
  .module('nav', [ uiRouter ])
  .component('nav', NavComponent)
  .name;

