app.controller('TodoListController', function() {
  var vm = this;
  
  vm.todos = [];

  vm.addTodo = function() {
    var todo = {
      title: vm.todoText,
      isCompleted: false
    };

    vm.todos.push(todo);
  };
})
