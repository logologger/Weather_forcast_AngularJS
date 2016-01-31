angular.module("GuessAPP",[])

 .controller("GuessTheNumberController",GuessTheNumberController);
function GuessTheNumberController($scope)
{
  $scope.verifyGuess=function()
  {
    $scope.deviation=$scope.original-$scope.guess;
    console.log($scope.deviation);
    $scope.nooftries=$scope.nooftries+1;
    
  };
  $scope.initializeGame=function()
  {
    $scope.nooftries=0;
    $scope.original=(Math.floor(Math.random()*1000)+1);
    $scope.guess=null;
    $scope.deviation=null;
  
  };
  $scope.initializeGame();
  
  
}