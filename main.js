var app = angular.module("app", []);
app.controller("TaskController", function() {
  var vm = this;
  vm.taskList = {
    toDo:[],
    inProgress:[],
    done:[]
  };

  vm.newTask = function(){
    console.log('call');
    vm.taskList.toDo.push({
      name: vm.name,
      desc: vm.desc
    });

    vm.name = '';
    vm.desc = '';

    console.log(vm.taskList);

  };

  vm.moveTask = function(){
    console.log('call');
  };

});
