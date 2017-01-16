import { App13Page } from './app.po';

describe('app13 App', function() {
  let page: App13Page;

  beforeEach(() => {
    page = new App13Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
