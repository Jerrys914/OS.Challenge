angular.module('osc.allProfiles',[])
  
.controller('AllProfilesCtrl', function($scope, $window, $location, $http) {
  $scope.profiles = [];
  $http({
    method: "GET",
    url: "/api/getAllProfiles"
  })
  .then(function success(res){
    $scope.profiles = res.data;
    if(res.data.length === 0){
      $scope.noProfiles = true;
    }
  });
});