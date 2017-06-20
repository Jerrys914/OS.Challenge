angular.module('osc.allProfiles',[])
  
.controller('AllProfilesCtrl', function($scope, $window, $location, $http, Profile) {
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
  }).catch(err => {
    console.error(err);
  });
  $scope.updateProfile = (profile) => {
    Profile.setData(profile,()=>{
      $location.path('/updateProfile');
    });
  }
  $scope.clear = () => {
    Profile.clearData(()=>{
      $location.path('/')
    });
  }
});