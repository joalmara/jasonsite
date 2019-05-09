var demoApp = angular.module("my-app", [])
.controller("demoController", function($scope, $location, $anchorScroll) {
$scope.scrollTo = function(scrollLocation){
  $location.hash(scrollLocation);
  $anchorScroll();
}
});