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
      bottom: '0px',
      left: '0px',
      right: '0px'
    };
    $scope.bases = [];
    $scope.bases.push(count);
    $ionicModal.fromTemplateUrl('modal.html', {
      scope: $scope,
      animation: 'slide-in-up'
    }).then(function(modal) {
      $scope.modal = modal;
    });

    $scope.createBase = createBase;

    function createBase(newBase) {
      var style = newBase;
      $scope.bases.push(style);
    }


  }
])

.controller('cloudTabDefaultPageCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
  // You can include any angular dependencies as parameters for this function
  // TIP: Access Route Parameters for your page via $stateParams.parameterName
  function($scope, $stateParams) {


  }
])
