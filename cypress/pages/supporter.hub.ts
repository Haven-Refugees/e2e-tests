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
  }

  public addNewOffer(offer: OfferCreate) {
    this.components.dashboard.addNewOffer(offer);
  }

  public verifyOffer(offer: OfferCreate) {
    this.components.dashboard.verifyOffer(offer);
  }

  public editOffer(offer: OfferCreate) {
    this.components.dashboard.editOffer(offer);
  }

  public withdrawEditedOffer(offer: OfferCreate) {
    this.components.dashboard.withdrawEditedOffer(offer);
  }
}

export default SupporterHub;
