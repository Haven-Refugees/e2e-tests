import BaseComponent from './base.component';

class SidemenuComponent extends BaseComponent {
  constructor() {
    super();
    this.elements = {
      sideMenuContainer: '.FloatingGroup.baTaHaPaX1'
    };
  }

  public testSideMenuAvailability() {
    cy.isVisible(this.elements.sideMenuContainer);
  }

}

export default SidemenuComponent;
