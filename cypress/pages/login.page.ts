import BasePage from './base.page';
import HeaderComponent from '../components/HeaderComponent';
import LoginModule, {AccountCredential, AccountType} from "../components/LoginModule";

class LoginPage extends BasePage {
  constructor() {
    super();
    this.url = 'https://app.findhaven.org/version-test';
    this.elements = {
      email: '.baTaJap > .bubble-element.Input[type=email]',
      password: '.baTaJax > .bubble-element.Input[type=password]',
      rememberMe: '.baTaJbaP > .Checkbox [type=checkbox]',
      submit: 'button.baTaJbaE',
    };
    this.components = {
      header: new HeaderComponent(),
      loginModule: new LoginModule()
    };
  }

  public login(accountType: AccountType, rememberMe: boolean = true){
    this.components.loginModule.login(accountType, rememberMe);
  }

  public doLogin(credentials: AccountCredential){
    this.components.loginModule.doLogin(credentials);
  }

  public testTitle() {
    cy.title().should('equal', this.commonData.title.loginPage);
  }

  public screenshot() {
    this.takeFullPageScreenShot('login page')
  }

}

export default LoginPage;
