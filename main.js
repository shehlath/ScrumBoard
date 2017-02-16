var app = angular.module("app", []);
app.controller("TaskController", function() {
  var vm = this;
  console.log('call');
  vm.myList = {
    toDo:[],
    inProgress:[],
    done:[]
  };

  vm.hello = function(){
    console.log('hello');
  };

  vm.hello();


  vm.newTask = function(){
    console.log('call');
    vm.myList.toDo.push({
      name: vm.name,
      desc: vm.desc
    });

    vm.name = '';
    vm.desc = '';

    console.log(vm.myList);

  };

});
