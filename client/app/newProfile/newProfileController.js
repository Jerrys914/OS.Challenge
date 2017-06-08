angular.module('osc.newProfile',[])

.controller('NewProfileCtrl', function($scope, $window, $location, Profile) {
  $scope.data = Profile.getData();
  if($scope.data.basicInfo.dob){
    // let arr = $scope.data.basicInfo.dob.slice(0,10);
    $scope.data.basicInfo.dob = new Date($scope.data.basicInfo.dob.substring(0,10).split('-'))
  }
  $scope.showBasicInfoForm = true;
  $scope.showAboutForm = false;
  $scope.review = false

  $scope.submitBasicInfo = () => {
    Profile.setBasicInfo($scope.data.basicInfo);
    console.log('Basic: ',Profile.getData());
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