angular.module('osc.newProfile',[])

.controller('NewProfileCtrl', function($scope, $window, $location, Profile) {
  $scope.data = Profile.getData();
  $scope.showBasicInfoForm = true;
  $scope.showAboutForm = false;
  $scope.review = false

  $scope.submitBasicInfo = () => {
    Profile.setBasicInfo($scope.data.basicInfo)
    $scope.showBasicInfoForm = false;
    $scope.showAboutForm = true;
  }
  $scope.submitAboutInfo = () => {
    Profile.setAboutInfo($scope.data.about);
    $scope.showBasicInfoForm = false;
    $scope.showAboutForm = false;
    $scope.review = true;
  }
  $scope.submitFinal = () => {
    Profile.saveNewProfile();
    $location.path('/')
  }
  $scope.editBasicInfo = () => {
    $scope.review = false;
    $scope.showBasicInfoForm = true;
  }
  $scope.editAboutForm = () => {
    $scope.review = false;
    $scope.showAboutForm = true;
  }
  $scope.clear = () => {
    Profile.clearData();
    $location.path('/')
  }
  $scope.submitUpdated = () => {
    Profile.update();
    $location.path('/');
  }
});