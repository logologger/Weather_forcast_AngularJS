//MODULE
var weatherApp=angular.module("weatherApp",['ngRoute','ngResource']);
/*
There are two pages in this application
Home Page --where you type the city name
Forecast Page --- wher you show the forecast


offset in bottstrap is used to increase left-margin so that it moves right like col-md-2-offset will
make to move right by 2 columns

*/
//ROUTES


weatherApp.config(function($routeProvider)
{
  
  $routeProvider
  .when('/home',
  {
    templateUrl:'template/home.html',
    controller:'homeController'
    
  })
  .when('/forecast',
  {
    templateUrl:'template/forecast.html',
    controller:'forecastController'
  })
  
  .when('/forecast/:days',
  {
    templateUrl:'template/forecast.html',
    controller:'forecastController'
  });
  
});
//SERVICE

/*

Service will allow you to share data between 2 controller as Service are singleton objects
so that they have only copy and no multiple instances of them are created

*/

weatherApp.service('cityService',function()
{
  this.city='Delhi DL';
  
});


//CONTROLLER

weatherApp.controller("homeController",["$scope","cityService",function($scope,cityService)
{
  
  $scope.city=cityService.city;
  $scope.$watch('city',function()
  {
     cityService.city=$scope.city;
    
    
  });
  
}]);


weatherApp.controller("forecastController",["$scope","cityService","$resource","$routeParams",function($scope,cityService,$resource,$routeParams)
{
  
   $scope.city=cityService.city;
   $scope.days=$routeParams.days || 2;
   $scope.weatherAPI=$resource("http://api.openweathermap.org/data/2.5/forecast/daily",
   {
      callback:"JSON_CALLBACK"
   },
   {
       get:{
           method:"JSONP"
       }
  });
   
   $scope.weatherResult=$scope.weatherAPI.get({
       q:$scope.city,
       cnt:$scope.days,
       appid:"44db6a862fba0b067b1930da0d769e98"
       
       
       
   });
   $scope.convertToFahrenheit=function(degK)
   {
     
     return /*Math.round((1.8**/(degK-273)/*)+32)*/;
     
   };
   $scope.convertToDate=function(dt)
   {
     
     return new Date(dt);
   };
   
      
}]);