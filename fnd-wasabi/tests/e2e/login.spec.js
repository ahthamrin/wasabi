describe('login', function() {

  by.addLocator('slideButton', function(btnText, opt_parentElement, opt_rootSelector) {

    var using = opt_parentElement || document
        , buttons = document.querySelectorAll('a');
        ;

    return Array.prototype.filter.call(buttons, function(button) {
        return button.textContent === btnText;
    });
  });

  it('open browser', function() {
    browser.get('https://localhost:3000');
  });

  it('login', function() {
    // browser.get('https://localhost:3000');

/*
    element(by.model('todoList.todoText')).sendKeys('write first protractor test');
    element(by.css('[value="add"]')).click();

    var todoList = element.all(by.repeater('todo in todoList.todos'));
    expect(todoList.count()).toEqual(3);
    expect(todoList.get(2).getText()).toEqual('write first protractor test');

    // You wrote your first test, cross it off the list
    todoList.get(2).element(by.css('input')).click();
    var completedAmount = element.all(by.css('.done-true'));
    expect(completedAmount.count()).toEqual(2);
*/
    element(by.model('username')).sendKeys('alice@soi.asia');
    element(by.model('password')).sendKeys('soi');
    element(by.buttonText('Login')).click();
    expect(element.all(by.buttonText('Logout')).count()).toEqual(1);

    element(by.repeater('cl in classLive').row(0).column('cl.title')).click();

  });

  it('show slide', function() {
    expect(element(by.binding('slideFile')).getAttribute('src')).toMatch("d01011/1-1-1.jpg");
  });

  it('check slide', function() {
    var EC = protractor.ExpectedConditions;
    element(by.slideButton('Next')).click()

    browser.sleep(30000);
    // browser.wait(EC.textToBePresentInElement($('#slideshow-current'),'1-1-2.jpg'),50000,'1-1-2');
    expect(element(by.binding('slideFile')).getAttribute('src')).toMatch("d01011/1-1-2.jpg");
  });

});