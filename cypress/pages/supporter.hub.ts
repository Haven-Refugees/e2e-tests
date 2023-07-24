import BasePage from './base.page';
import SidemenuComponent from "../components/Sidemenu.component";
import LoginModule, {AccountType} from "../components/LoginModule";
import DashboardComponent, {OfferCreate} from "../components/DashboardComponent";

class SupporterHub extends BasePage {
  constructor() {
    super();
    this.url = 'https://app.findhaven.org/version-test';
    this.elements = {

    };
    this.components = {
      sideMenu: new SidemenuComponent(),
      loginModule: new LoginModule(),
      dashboard: new DashboardComponent()
    };
  }

  public performLogin() {
    this.components.loginModule.login(AccountType.supporter);
  }

  public applySideMenuTests() {
    this.components.sideMenu.applyCommonSideMenuTests('Supporter Menu');
  }

  public goToDashboard() {
    this.components.dashboard.goToDashboard();
    //TODO: add screen shot testing
  }

  public addOffer(offer: OfferCreate) {
    this.components.dashboard.goToDashboard();
    this.components.dashboard.addNewOffer(offer);
  }
}

export default SupporterHub;
