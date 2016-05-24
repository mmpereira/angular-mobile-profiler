

angular.module('angular-mobile-profiler', ['angular-json-tree'])
  .directive('profiler', profiler);


  function profiler() {
    return {
      restrict: 'E',
      scope: {
        profile: '='
      },
      template: "<json-tree object='profile'></json-tree>"
    }
  }
