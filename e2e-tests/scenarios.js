'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('my app', function() {

  browser.get('index.html');

  it('should automatically redirect to /traps when location hash/fragment is empty', function() {
    expect(browser.getLocationAbsUrl()).toMatch("/traps");
  });


  describe('traps', function() {

    beforeEach(function() {
      browser.get('index.html#/traps');
    });


    it('should render traps when user navigates to /traps', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for view 1/);
    });

  });

});
