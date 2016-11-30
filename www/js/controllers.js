angular.module('app.controllers', [])

.controller('cameraTabDefaultPageCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
  // You can include any angular dependencies as parameters for this function
  // TIP: Access Route Parameters for your page via $stateParams.parameterName
  function($scope, $stateParams) {
    function btnClick() {

    }
  }
])

.controller('cartTabDefaultPageCtrl', ['$scope', '$stateParams', '$ionicModal', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
  // You can include any angular dependencies as parameters for this function
  // TIP: Access Route Parameters for your page via $stateParams.parameterName
  function($scope, $stateParams, $ionicModal) {
    var count = {
      top: '20px',
      bottom: '20px',
      left: '20px',
      right: '20px'
    };
    var pointCount = {

    }
    $scope.bases = [];
    $scope.points = [];
    $scope.bases.push(count);
    $scope.points.push(pointCount);

    $ionicModal.fromTemplateUrl('modal.html', {
      id: '1',
      scope: $scope,
      animation: 'slide-in-up'
    }).then(function(modal) {
      $scope.Modal1 = modal;
    });

    $ionicModal.fromTemplateUrl('modalPoint.html', {
      id: '2',
      scope: $scope,
      animation: 'slide-in-up'
    }).then(function(modal) {
      $scope.Modal2 = modal;
    });

    $scope.openModal = function(index) {
      if (index == 1) $scope.Modal1.show();
      else $scope.Modal2.show();
    };

    $scope.closeModal = function(index) {
      if (index == 1) $scope.Modal1.hide();
      else $scope.Modal2.hide();
    };

    $scope.createBase = createBase;
    $scope.createLocationPoint = createLocationPoint;

    function createBase(newBase) {
      newBase.top = parseInt(newBase.top);
      var style = newBase;
      $scope.bases.push(style);
    }

    function createLocationPoint(newLocation) {
      var style = newLocation;

    }
  }
])

.controller('cloudTabDefaultPageCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
  // You can include any angular dependencies as parameters for this function
  // TIP: Access Route Parameters for your page via $stateParams.parameterName
  function($scope, $stateParams) {


  }
])
