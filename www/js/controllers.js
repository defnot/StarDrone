angular.module('app.controllers', [])

.controller('cameraTabDefaultPageCtrl', ['$scope', '$stateParams', '$rootScope', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
  // You can include any angular dependencies as parameters for this function
  // TIP: Access Route Parameters for your page via $stateParams.parameterName
  function($scope, $stateParams, $rootScope) {

    $scope.callDrone = function() {
      console.log('bitch i called the drone');
      $rootScope.show = "true";
      console.log($rootScope.show);
    }

  }
])

.controller('cartTabDefaultPageCtrl', ['$scope', '$stateParams', '$ionicModal', '$rootScope', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
  // You can include any angular dependencies as parameters for this function
  // TIP: Access Route Parameters for your page via $stateParams.parameterName
  function($scope, $stateParams, $ionicModal, $rootScope) {
    /*
    var count = {
      top: '20px',
      bottom: '20px',
      left: '20px',
      right: '20px'
    };
    */
    $scope.motionCount = 0;
    $scope.keepPoints = [];
    $scope.paths = [];
    $scope.bases = [];
    $scope.points = [];
    $scope.patnIds = [];
    $scope.pathId = 0;
    $scope.pathIds = [];
    $scope.coordinates = [];
    $scope.y = 0;
    $scope.x = 0;
    $scope.y1 = 0;
    $scope.x1 = 0;
    $scope.pathIds.push($scope.pathId);
    $scope.pathEl = '<path id="theMotionPath" d="M522 522,';

    $scope.start = function() {
      if ($scope.coordinates.length >= 2) {
        var removed = $scope.coordinates.splice($scope.coordinates.length - 4, 4);
        $scope.y = removed[0];
        $scope.x = removed[1];
        $scope.y1 = removed[2];
        $scope.x1 = removed[3];

        console.log($scope.y);
        console.log($scope.x);
        console.log($scope.y1);
        console.log($scope.x1);
      }

      console.log('clicked that shit');
      var svg = document.getElementById('svgEl');
      $scope.pathEl += '" stroke-width="5px" stroke="green" fill="none"/>\n' +
        '<circle cx="" cy="" r="5" fill="red">\n' +
        '<animateMotion dur="190s" repeatCount="indefinite">\n' +
        '<mpath xlink:href="#theMotionPath"/>\n' +
        '</animateMotion>\n' +
        '</circle>';
      $scope.showAnimation = "defined";

      $http.post("http://localhost:3030/takeoff", {
        command: "takeOff"
      }).then(function(data) {
        console.log(data);
      });

      setTimeout(function() {
        svg.removeChild(document.getElementById("theMotionPath"));
      }, 40000);



    }

    //$scope.bases.push(count);

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
      console.log($rootScope.show);
      newBase.top = parseInt(newBase.top);
      var style = newBase;
      $scope.bases.push(style);
    }
    $scope.prevxcorfirst = 0;
    $scope.prevycorfirst = 0;

    function createLocationPoint(newLocation) {
      var style = newLocation;
      $scope.points.push(style);
      var inject = {};
      $scope.coordinates.push(newLocation.ycor);
      $scope.coordinates.push(newLocation.xcor);
      if ($scope.points.length == 1) {
        inject.xfirst = 522;
        inject.yfirst = 522;
        inject.xsecond = $scope.points[0].xcor;
        inject.ysecond = $scope.points[0].ycor;
        $scope.pathEl += ' ' + newLocation.ycor + ' ' + newLocation.xcor + ',';
      } else if ($scope.points.length > 1) {

        inject.xfirst = $scope.prevycorfirst;
        inject.yfirst = $scope.prevxcorfirst;
        inject.xsecond = newLocation.xcor;
        inject.ysecond = newLocation.ycor;
        $scope.pathEl += ' ' + newLocation.ycor + ' ' + newLocation.xcor + ',';
        console.log($scope.pathEl);
        $scope.pathId++;
        $scope.pathIds.push($scope.pathId);
      }
      $scope.paths.push(inject);

      $scope.prevxcorfirst = newLocation.xcor;
      $scope.prevycorfirst = newLocation.ycor;


    }
  }
])

.controller('cloudTabDefaultPageCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
  // You can include any angular dependencies as parameters for this function
  // TIP: Access Route Parameters for your page via $stateParams.parameterName
  function($scope, $stateParams) {


  }
])
