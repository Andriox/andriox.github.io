controllers.controller('HomeController',['$scope','WeatherForecast',
        function($scope,WeatherForecast){

  $scope.pageTitle = "Home Page";

  $scope.successCallback  = function(){
    console.log("fetchData .....");
  }

  WeatherForecast.get({},function(data) {
    console.log(data);
  },function(data,status){
    console.log(data);
  });
}]);
