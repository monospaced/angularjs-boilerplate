(function() {
  'use strict';

  angular
    .module('app')
    .directive('loading', loading);

  function loading() {
    return {
      templateUrl: '/shared/components/loading/loading.html',
    };
  }
}());