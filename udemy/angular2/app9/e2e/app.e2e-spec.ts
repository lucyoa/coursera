import { App9Page } from './app.po';

describe('app9 App', function() {
  let page: App9Page;

  beforeEach(() => {
    page = new App9Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
