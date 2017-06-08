angular.module('osc', [
  'osc.allProfiles',
  'osc.newProfile',
  'osc.services',
  'ngRoute',
  'ui.bootstrap',
  'ui.mask',
])
.config(($routeProvider, $locationProvider, $httpProvider) => {
  $routeProvider
  .when('/allProfiles', {
    templateUrl: './app/allProfiles/allProfiles.tmpl.html',
    controller: 'AllProfilesCtrl'
  })
  .when('/newProfile', {
    templateUrl: './app/newProfile/newProfile.tmpl.html',
    controller: 'NewProfileCtrl'
  })
  .otherwise({ redirectTo: '/allProfiles' });
});