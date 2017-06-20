angular.module('osc.newProfile',[])

.controller('NewProfileCtrl', function($scope, $window, $location, Profile) {
  $scope.data = Profile.getData();
  if($location.url() === '/newProfile'){
    Profile.clearData();
  }
  $scope.sportOptions = [ "Golf",
    "Tennis",
    "Cricket",
    "Basketball",
    "Baseball",
    "American Football",
    "Aquatics",
    "Archery",
    "Automobile Racing",
    "Badminton",
    "Beach Volleyball",
    "Bobsleigh",
    "Body Building",
    "Boxing",
    "Cross Country Running",
    "Cross Country Skiing",
    "Curling",
    "Cycling",
    "Darts",
    "Decathlon",
    "Down Hill Skiing",
    "Equestrianism",
    "eSports",
    "Fencing",
    "Field Hockey",
    "Figure Skating",
    "Gymnastics",
    "Ice Hockey",
    "Martial Arts",
    "Mixed Martial Arts",
    "Modern Pentathlon",
    "Motorcycle Racing",
    "Netball",
    "Polo",
    "Racquetball",
    "Rowing",
    "Rugby",
    "Sailing",
    "Softball",
    "Shooting",
    "Skateboarding",
    "Skeet Shooting",
    "Skeleton",
    "Snow Boarding",
    "Soccer (Football)",
    "Squash",
    "Surfing",
    "Swimming",
    "Track and Field"
  ];
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