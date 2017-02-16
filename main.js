var app = angular.module("app", []);
app.controller("TaskController", function() {
  var vm = this;
  vm.taskList = {
    toDo:[],
    inProgress:[],
    done:[]
  };

  vm.newTask = function(){
    vm.taskList.toDo.push({
      id: guid(),
      name: vm.name,
      desc: vm.desc
    });

    vm.name = '';
    vm.desc = '';

  };

  vm.moveTask = function(type, id){
    var temp;
    if(type === 'todo'){
      for(var i = 0; i < vm.taskList.toDo.length; i++){
        var obj = vm.taskList.toDo[i];

        if(obj.id === id)
        {
          temp = vm.taskList.toDo.splice(i,1);
        }
      }
      vm.taskList.inProgress.push(temp[0]);

    }

    if(type==='inProgress'){
      for(var i = 0; i < vm.taskList.inProgress.length; i++){
        var obj = vm.taskList.inProgress[i];

        if(obj.id === id)
        {
          temp = vm.taskList.inProgress.splice(i,1);
        }
      }
      vm.taskList.done.push(temp[0]);

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
