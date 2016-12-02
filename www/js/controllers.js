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
    $scope.keepPoints = [];
    $scope.paths = [];
    $scope.bases = [];
    $scope.points = [];

    $scope.bases.push(count);

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
    $scope.prevxcorfirst = 0;
    $scope.prevycorfirst = 0;

    function createLocationPoint(newLocation) {
      console.log($scope.prevxcorfirst);
      console.log($scope.prevycorfirst);
      var style = newLocation;
      $scope.points.push(style);
      var inject = {};
      if ($scope.points.length == 1) {
        inject.xfirst = 522;
        inject.yfirst = 522;
        inject.xsecond = $scope.points[0].xcor;
        inject.ysecond = $scope.points[0].ycor;
      } else if ($scope.points.length > 1) {

        inject.xfirst = $scope.prevycorfirst;
        inject.yfirst = $scope.prevxcorfirst;


        /*
           inject.xfirst = 550;
           inject.yfirst = 50;
           inject.xsecond = 50;
           inject.ysecond = 590;
           */
        inject.xsecond = newLocation.xcor;
        inject.ysecond = newLocation.ycor;
        console.log(inject);
      }
      $scope.paths.push(inject);

      $scope.prevxcorfirst = newLocation.xcor;
      console.log($scope.prevxcorfirst);
      $scope.prevycorfirst = newLocation.ycor;
      console.log($scope.prevycorfirst);


    }
  }
])

.controller('cloudTabDefaultPageCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
  // You can include any angular dependencies as parameters for this function
  // TIP: Access Route Parameters for your page via $stateParams.parameterName
  function($scope, $stateParams) {


  }
])
