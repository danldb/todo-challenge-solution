describe('TodoListController', function() {
  beforeEach(module('todoApp'));

  var ctrl;

  var todoFixture = [
    {
      title: "Do all the things!",
      isCompleted: false
    }
  ];

  beforeEach(inject(function($controller){
    ctrl = $controller('TodoListController');
  }));

  it('displays todos', function() {
    ctrl.todoText = "Do all the things!";
    ctrl.addTodo();
    expect(ctrl.todos).toEqual(todoFixture);
  });
});
