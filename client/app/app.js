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
    templateUrl: '',
    controller: ''
  })
  .otherwise({ redirectTo: '/allProfiles' });
});