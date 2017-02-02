import angular from 'angular';
import { ScrollBehaviourService } from './scroll-behaviour.service';

export const ScrollBehaviourModule = angular
  .module('scroll-behaviour', [])
  .service('ScrollBehaviour', ScrollBehaviourService)
  .name;
