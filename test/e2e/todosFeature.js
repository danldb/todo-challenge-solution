describe('Todos list', function() {
  var todoList = element.all(by.repeater('todo in todoList.todos'));

  beforeEach(function(){
    browser.get('http://localhost:8000');
  });

  it('has a title', function() {
    browser.get('http://localhost:8000');
    expect(browser.getTitle()).toEqual('Stuff Todo');
  });

  it('accepts an input', function(){
    inputTodo();
    expect(todoList.count()).toEqual(1);
    expect(todoList.last().getText()).toEqual('Do all the things!');
  })

  it('shows a total number of todos', function() {
    var todosCount = element(by.css('[id=todoCount]'));
    inputTodo();
    expect(todosCount.getText()).toEqual('1');
  });

  function inputTodo () {
    element(by.model('todoList.todoText')).sendKeys('Do all the things!');
    element(by.css('[id=submitTodo]')).click();
  };
});
