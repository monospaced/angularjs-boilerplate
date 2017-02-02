import angular from 'angular';
import { SectionComponent } from './section.component';

export const SectionModule = angular
  .module('section', [])
  .component('section', SectionComponent)
  .name;
