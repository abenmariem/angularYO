'use strict';

/**
 * @ngdoc function
 * @name angularYoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularYoApp
 */

app.controller('driversListController', ['$scope','ergastAPIservice','$location',function($scope,ergastAPIservice,$location) {


  $scope.driversList = [];

  ergastAPIservice.getDrivers().success(function (response) {
    //Dig into the responde to get the relevant data
    $scope.driversList = response.MRData.StandingsTable.StandingsLists[0].DriverStandings;
  });

  //   $scope.detailsLocation = $location.path('routeName');

}]);




