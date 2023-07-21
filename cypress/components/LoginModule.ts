import BaseComponent from "../components/base.component";

export enum AccountType {
  refugee,
  supporter
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
  }

  public login(accountType: AccountType, rememberMe: boolean = true){
    const { supporter, refugee } = Cypress.env('accounts');

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
      default: {
        throw new Error('Please specify AccountType');
      }
    }
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


    cy.url().should('include', '/dashboard');
  }

}

export default LoginModule;
