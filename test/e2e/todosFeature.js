describe('Todos list', function() {
  it('has a title', function() {
    browser.get('http://localhost:8000');
    expect(browser.getTitle()).toEqual('Stuff Todo');
  });
});
