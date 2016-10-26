(function() {
  'use strict';

  angular
    .module('app')
    .directive('error', error);

  function error() {
    return {
      templateUrl: '/shared/components/error/error.html',
    };
  }
}());