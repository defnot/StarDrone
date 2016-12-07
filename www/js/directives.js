(function() {
  'use strict';

  angular
    .module('app.directives', [])
    .directive('flightPlan', flightPlan)
    .directive('pointLocation', pointLocation)
    .directive('createPath', createPath)
    .directive('createMotion', createMotion);

  /* @ngInject */
  function flightPlan() {
    var directive = {
      restrict: 'A',
      template: '<img src="img/tower-pic-sm.png" class="imgAbsolute" style="top:{{vm.topA}};bottom:{{vm.bottomA}};left:{{vm.leftA}};right:{{vm.rightA}}"; />',
      scope: {
        top: '@top',
        bottom: '@bottom',
        left: '@left',
        right: '@right',
      },
      link: link,
      controller: Controller,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    function link(scope, el, attr) {}
  }

  function pointLocation() {
    var directive = {
      restrict: 'A',
      template: '<circle r="10" cy="{{vmp.xcorA}}" cx="{{vmp.ycorA}}" fill="#f33" />',
      scope: {
        xcor: '@xcor',
        ycor: '@ycor',
      },
      link: link,
      controller: PointController,
      controllerAs: 'vmp',
      bindToController: true
    };

    return directive;

    function link(scope, el, attr) {
      el.attr('')
    }
  }

  function createPath() {
    var directive = {
      restrict: 'A',
      template: '<path class="key-anim1" stroke-width="5" fill="none" stroke-width="5px" stroke="rgba(200,10,10,0.5)" d="M{{pmp.xfirstA}} {{pmp.yfirstA}},{{pmp.ysecondA}} {{pmp.xsecondA}}" id="{{pmp.motionIdA}}" /><circle cx="" cy="" r="5" fill="red"><animateMotion dur="6s" repeatCount="indefinite"><mpath xlink:href="{{pmp.trustCon(pmp.motionIdA)}}"/></animateMotion></circle>',
      scope: {
        xfirst: '@xfirst',
        yfirst: '@yfirst',
        xsecond: '@xsecond',
        ysecond: '@ysecond',
        motionId: '@motionId',
      },
      link: link,
      controller: PathController,
      controllerAs: 'pmp',
      bindToController: true
    };

    return directive;

    function link(scope, el, attr) {
      el.attr('')
    }
  }

  function createMotion() {
    var directive = {
      restrict: 'A',
      template: '<circle cx="" cy="" r="5" fill="red"><animateMotion dur="6s" repeatCount="indefinite"><mpath xlink:href="{{mcm.trustCon(mcm.motionIdA)}}"/></animateMotion>',
      scope: {
        motionId: '@motionId',
      },
      link: link,
      controller: MotionController,
      controllerAs: 'mcm',
      bindToController: true
    };

    return directive;

    function link(scope, el, attr) {}
  }

  Controller.$inject = [];
  PointController.$inject = [];
  PathController.$inject = ['$sce'];
  MotionController.$inject = ['$sce'];
  /* @ngInject */
  function Controller() {
    var vm = this;

    activate();
    /*
        top:220
                    --right
        left:590

        top:175			 --top

        top:220
                    --left
        left:100
    */

    function activate() {
      vm.topA = vm.top + 'px';
      vm.bottomA = vm.bottom + 'px';
      vm.leftA = vm.left + 'px';
      vm.rightA = vm.right + 'px';
    }
  }

  function PointController() {
    var vmp = this;
    activate();

    function activate() {
      vmp.xcorA = vmp.xcor;
      vmp.ycorA = vmp.ycor;
    }
  }

  function PathController($sce) {
    var pmp = this;
    activate();
    pmp.trustCon = function(conn) {
      return $sce.trustAsResourceUrl('#' + conn);
    };

    function activate() {
      pmp.xfirstA = pmp.xfirst;
      pmp.yfirstA = pmp.yfirst;
      pmp.xsecondA = pmp.xsecond;
      pmp.ysecondA = pmp.ysecond;
      pmp.motionIdA = pmp.motionId;

    }
  }

  function MotionController($sce) {
    var mcm = this;
    activate();
    mcm.trustCon = function(conn) {
      return $sce.trustAsResourceUrl('#' + conn);
    };

    function activate() {
      mcm.motionIdA = mcm.motionId;
    }
  }
})();
