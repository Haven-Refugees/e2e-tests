import { commonData, CommonData } from '../fixtures/common.data';
import { Elements } from '../ts/types/elements.type';

export type Components = {
  [key: string]: any;
};

class BasePage {
  public commonData: CommonData;

  public elements: Elements;

  public components: Components;

  public url: string;

  constructor() {
    this.commonData = commonData;
  }

  public open() {
    cy.visit(this.url);
  }

  public takeFullPageScreenShot(label: string) {
    cy.get("html, body").invoke(
        "attr",
        "style",
        "height: auto; scroll-behavior: auto;"
    );
    cy.waitForStableDOM({ pollInterval: 1000, timeout: 10000 });
    cy.screenshot(label, { capture: 'fullPage', scale: true });
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

export default BasePage;
