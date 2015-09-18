describe('Todos list', function() {
  it('has a title', function() {
    browser.get('http://localhost:8000');
    expect(browser.getTitle()).toEqual('Stuff Todo');
  });

  it('accepts an input', function(){
    var todoList = element.all(by.repeater('todo in todoList.todos'));
    element(by.model('todoList.todoText')).sendKeys('Do all the things!');
    element(by.css('[id=submitTodo]')).click();
    expect(todoList.count()).toEqual(1);
  })
});
