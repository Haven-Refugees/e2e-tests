import { commonData, CommonData } from '../fixtures/common.data';
import { Elements } from '../ts/types/elements.type';

class BaseComponent {
  public commonData: CommonData;

  public elements: Elements;
  public components: { [key: string]: any } = {};

  constructor() {
    this.commonData = commonData;
  }

  public screenshot<K = any>(alias: string, label) {
    cy.get("html, body").invoke(
        "attr",
        "style",
        "height: auto; scroll-behavior: auto;"
    );
    cy.waitForStableDOM({ pollInterval: 1000, timeout: 10000 });
    cy.get(alias).screenshot(label, { capture: 'runner' });
  }
}

export default BaseComponent;
