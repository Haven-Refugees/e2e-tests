import BaseComponent from './base.component';

class LandingHeaderComponent extends BaseComponent {
  constructor() {
    super();
    this.elements = {
      logo: '#SITE_HEADER [data-testid=linkElement] img',
      navigationLink: '.nav-list__link-title',
    };
  }

  public testLogoPresence() {
    cy.isVisible(this.elements.logo);
  }

  public goToLogin() {
    cy.get(this.elements.navigationLink).contains(this.commonData.header.logIn).click();
  }
}

export default LandingHeaderComponent;
