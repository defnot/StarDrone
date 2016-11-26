(function() {
  'use strict';

  angular
    .module('app.directives', [])
    .directive('flightPlan', flightPlan);

  /* @ngInject */
  function flightPlan() {
    var directive = {
      restrict: 'A',
      template: '<img src="img/tower-pic-sm.png" class="imgAbsolute" style="top:{{vm.topA}};bottom:{{vm.bottomA}};left:{{vm.leftA}};right:{{vm.rightA}}" />',
      scope: {
        top: '@top',
        bottom: '@bottom',
        left: '@left',
        right: '@right'
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
    console.log(vm.top);
    activate();

    function activate() {
      vm.topA = vm.top + 'px';
      vm.bottomA = vm.bottom + 'px';
      vm.leftA = vm.left + 'px';
      vm.rightA = vm.right + 'px';
    }
  }
})();
