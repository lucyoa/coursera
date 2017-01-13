import { App8Page } from './app.po';

describe('app8 App', function() {
  let page: App8Page;

  beforeEach(() => {
    page = new App8Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
