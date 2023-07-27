import BaseComponent from "../components/base.component";
import SidemenuComponent from "./Sidemenu.component";

export enum AccountType {
  refugee = 'refugee',
  supporter = 'supporter',
  admin = 'admin'
}

export type AccountCredential = {
  login: string;
  password: string;
  rememberMe: boolean
}

class LoginModule extends BaseComponent {
  constructor() {
    super();
    this.elements = {
      email: '.baTaJap > .bubble-element.Input[type=email]',
      password: '.baTaJax > .bubble-element.Input[type=password]',
      rememberMe: '.baTaJbaP > .Checkbox [type=checkbox]',
      submit: 'button.baTaJbaE',
    };
    this.components = {
      sideMenu: new SidemenuComponent(),
    };
  }

  public login(accountType: AccountType, rememberMe: boolean = true){
    const { supporter, refugee, admin } = Cypress.env('accounts');

    switch (accountType) {
      case AccountType.refugee:
        this.doLogin({
          login: refugee.login,
          password: refugee.password,
          rememberMe: rememberMe
        });
        break;
      case AccountType.supporter:
        this.doLogin({
          login: supporter.login,
          password: supporter.password,
          rememberMe: rememberMe
        });
        break;
      case AccountType.admin:
        this.doLogin({
          login: admin.login,
          password: admin.password,
          rememberMe: rememberMe
        });
        break;
      default: {
        throw new Error('Please specify AccountType');
      }
    }

    cy.url().should('include', '/dashboard');
    this.verifyLogin(accountType);
  }

  public verifyLogin(accountType: AccountType) {
    this.components.sideMenu.applyCommonSideMenuTests(`${accountType} Menu`);
  }

  public doLogin(credentials: AccountCredential){
    cy.get(this.elements.email)
        .type(credentials.login);
    cy.get(this.elements.password)
        .type(credentials.password);

    if (credentials.rememberMe) {
      cy.get(this.elements.rememberMe)
          .check()
          .should("be.checked");
    } else {
      cy.get(this.elements.rememberMe)
          .uncheck()
          .should("not.be.checked");
    }

    cy.get(this.elements.submit).click();
  }

}

export default LoginModule;
