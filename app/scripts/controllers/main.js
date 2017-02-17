'use strict';
var app = angular.module('app', []);
app.controller('TaskController', function($scope) {
  $scope.taskList = {
    toDo:[],
    inProgress:[],
    done:[]
  };

  $scope.newTask = function(){
    $scope.taskList.toDo.push({
      id: guid(),
      name: $scope.name,
      desc: $scope.desc
    });

    $scope.name = '';
    $scope.desc = '';

  };

  $scope.moveTask = function(type, id){
    var temp;
    if(type === 'todo'){
      for(var i = 0; i < $scope.taskList.toDo.length; i++){
        var task = $scope.taskList.toDo[i];

        if(task.id === id)
        {
          temp = $scope.taskList.toDo.splice(i,1);
        }
      }
      $scope.taskList.inProgress.push(temp[0]);

    }

    if(type==='inProgress'){
      for(var j = 0; j < $scope.taskList.inProgress.length; j++){
        var task1 = $scope.taskList.inProgress[j];

        if(task1.id === id)
        {
          temp = $scope.taskList.inProgress.splice(j,1);
        }
      }
      $scope.taskList.done.push(temp[0]);

    }
};

  function guid() {
    function s4() {
      return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
    s4() + '-' + s4() + s4() + s4();
  }

});
