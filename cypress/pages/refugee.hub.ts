import BasePage from './base.page';
import SidemenuComponent from '../components/Sidemenu.component';
import LoginModule, {AccountType} from "../components/LoginModule";

class RefugeeHub extends BasePage {
  constructor() {
    super();
    this.url = 'https://app.findhaven.org/version-test';
    this.elements = {
    };
    this.components = {
      sideMenu: new SidemenuComponent(),
      loginModule: new LoginModule()
    };
  }

  public performLogin() {
    this.components.loginModule.login(AccountType.refugee);
  }

  public applySideMenuTests() {
    this.components.sideMenu.applyCommonSideMenuTests('Refugee Menu');
  }
}

export default RefugeeHub;
