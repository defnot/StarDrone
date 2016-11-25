(function() {
  'use strict';

  angular
    .module('app.directives', [])
    .directive('flightPlan', flightPlan);

  /* @ngInject */
  function flightPlan() {
    var directive = {
      restrict: 'A',
      template: '<img src="img/tower-pic-sm.png" class="imgAbsolute" style="top:{{vm.topA}};bottom:{{vm.bottomA}}" />',
      scope: {
        top: '@top',
        bottom: '@bottom'
      },
      link: link,
      controller: Controller,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    function link(scope, el, attr) {}
  }

  Controller.$inject = [];

  /* @ngInject */
  function Controller() {
    var vm = this;
    console.log(vm);

    activate();

    function activate() {
      vm.topA = vm.top;
      vm.bottomA = vm.bottom;
    }
  }
})();
