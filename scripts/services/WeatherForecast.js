app.factory('WeatherForecast',['$resource',function($resource){
  // var dataUrl = "http://samples.openweathermap.org/data/2.5/find?q=London&appid=b6907d289e10d714a6e88b30761fae22";
  //var dataUrl = "http://openweathermap.org/data/2.5/find?q=london&type=like&sort=population&cnt=30&appid=b6907d289e10d714a6e88b30761fae22&_=1521048573165";
  var dataUrl = "http://openweathermap.org/data/2.5/find?q=london&appid=b6907d289e10d714a6e88b30761fae22";
  return $resource(dataUrl,{},{
    'get' : {method : 'GET',headers:{
      "Access-Control-Allow-Origin":"*",
      "Access-Control-Allow-Methods":"GET,POST",
      "Access-Control-Allow-Headers":"Access-Control-Allow-Origin",
      "Access-Control-Allow-Credentials" : "true"
    }}
  });
}]);

// services.service('WeatherForecastService',['$http',function($http){
//   var self = this;
//
//   this.fetchData = function($scope,place){
//     $http({
//       url : "http://samples.openweathermap.org/data/2.5/forecast?q=M%C3%BCnchen,DE&appid=b6907d289e10d714a6e88b30761fae22"
//       method : "GET",
//       headers : {
//         'Content-type' : 'application/json'
//       }
//     }).success(function(data,status){
//       $scope.weatherData = data;
//     }).error(function(data,status){
//       $scope.message = "Something went wrong";
//     });
//   }
//
// }]);
