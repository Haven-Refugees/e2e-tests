import LandingPage from '../../pages/landing.page';

describe('As a visitor I want to see Landing Page', () => {
  const landingPage = new LandingPage();

  it('should have common elements and full page screenshot should match', () => {
    landingPage.open();
    landingPage.testCommonElements();
    landingPage.screenshotBasicElements();
  });

  it('Lang switcher should switch language correctly', () => {
    landingPage.open();
    landingPage.testLangSwitcher();
  });
});
