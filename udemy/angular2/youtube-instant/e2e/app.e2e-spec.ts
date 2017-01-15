import { YoutubeInstantPage } from './app.po';

describe('youtube-instant App', function() {
  let page: YoutubeInstantPage;

  beforeEach(() => {
    page = new YoutubeInstantPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
