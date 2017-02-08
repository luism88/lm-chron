import { LmChronometerPage } from './app.po';

describe('lm-chronometer App', function() {
  let page: LmChronometerPage;

  beforeEach(() => {
    page = new LmChronometerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
