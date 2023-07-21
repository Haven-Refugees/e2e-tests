import BasePage from './base.page';
import SidemenuComponent from "../components/Sidemenu.component";
import LoginModule, {AccountType} from "../components/LoginModule";

class SupporterHub extends BasePage {
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
    this.components.loginModule.login(AccountType.supporter);
  }

  public applySideMenuTests() {
    this.components.sideMenu.testSideMenuAvailability();
    this.screenshot(this.components.sideMenu.elements.sideMenuContainer, 'Supporter Menu');
  }
}

export default SupporterHub;
