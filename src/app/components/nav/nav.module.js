import angular from 'angular';
import { NavComponent } from './nav.component';

export const NavModule = angular
  .module('nav', [])
  .component('nav', NavComponent)
  .name;

