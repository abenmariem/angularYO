'use strict';

/**
 * @ngdoc overview
 * @name angularYoApp
 * @description
 * # angularYoApp
 *
 * Main module of the application.
 */
var app = angular
  .module('angularYoApp', [
    'ngRoute'
  ]);

app.config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  // $locationProvider.hashPrefix('!');

  $routeProvider.when("/drivers/:id", {templateUrl: "views/driver-details.html", controller: "driverDetailsController"});

  $routeProvider.when('/drivers', {
    templateUrl: 'views/drivers-list.html',
    controller: 'driversListController'
  }).
  otherwise({redirectTo: '/drivers'});

}]);
