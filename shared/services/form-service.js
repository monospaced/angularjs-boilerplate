(function() {
  'use strict';
  angular
    .module('app')
    .service('FormService', FormService);

  FormService.$inject = ['$window',];

  function FormService($window) {

    var service = {
      invalidSubmission: invalidSubmission,
    };

    return service;

    function invalidSubmission(target) {
      var invalidElem = target.querySelectorAll('.ng-invalid')[0];
      $window.scroll(0, offsetTop(invalidElem));
      invalidElem.focus();
      return false;
    }

    function offsetTop(element) {
      var top = 0;
      var offset = 0;
      if (element.offsetParent) {
        do {
          top += element.offsetTop;
        } while (!!(element = element.offsetParent));
        return [top - offset,];
      }
      return offset;
    }
  }
}());
