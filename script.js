var app = angular.module("toDo",[]);

app.controller('toDoCtrl', function($scope){
  $scope.list=[];
  $scope.addToDo=function(listItem){
  $scope.list.push({
    info:listItem.info
  });

  };
});
