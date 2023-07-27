import LandingHeaderComponent from '../components/LandingHeaderComponent';

import BasePage from './base.page';

class LandingPage extends BasePage {
  constructor() {
    super();
    this.url = 'https://www.findhaven.org/';
    this.elements = {
      header: '.SITE_HEADER_WRAPPER',
      main: '.PAGES_CONTAINER',
      footer: '.SITE_FOOTER_WRAPPER',
      langSwitch: '[data-testid=language-selector-container]',
      langSwitchDefault: '[data-testid=languages-dropdown-handle] [data-testid=languages-dropdown-option-text]',
      langSwitchENLabel: '[data-testid=language-selector-container] [aria-label=English]',
      langSwitchUALabel: '[data-testid=language-selector-container] [aria-label=Ukrainian]',
      accordion: '.questionAnswerBlock',
      accordionFirstItem: '.questionAnswerBlock ul li:first-child',
      accordionFirstItemAnswer: '.questionAnswerBlock ul li:first-child .questionAnswer',
    };
    this.components = {
      header: new LandingHeaderComponent(),
    };
  }

  public testTitle() {
    cy.title().should('equal', this.commonData.title.home);
  }

  public testLangSwitcher() {
    this.takeFullPageScreenShot('Default language state');
    cy.get(this.elements.langSwitchDefault).should('have.text', this.commonData.langSwitch.defaultLang);
    cy.get(this.elements.langSwitch).click();
    cy.get(this.elements.langSwitchUALabel).click();
    this.takeFullPageScreenShot('Ukrainian language state');
  }

  public screenshotBasicElements() {
    this.screenshot(this.elements.header, 'landing-header');
    this.screenshot(this.elements.main, 'landing-main');
    this.screenshot(this.elements.footer, 'landing-footer');
  }

  public testCommonElements() {
    this.testTitle();
    this.components.header.testLogoPresence();
  }

  public testAccordion() {
    cy.scrollTo('bottom');
    cy.waitForStableDOM({ pollInterval: 1000, timeout: 10000 });
    cy.get(this.elements.accordionFirstItem).click();
    cy.isVisible(this.elements.accordionFirstItemAnswer);
  }

  public goToLogin() {
    this.components.header.goToLogin()
  }
}

export default LandingPage;
