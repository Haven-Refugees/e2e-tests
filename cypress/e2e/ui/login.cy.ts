import LoginPage from '../../pages/login.page';
import {AccountType} from "../../components/LoginModule";

describe('As a user I want to perform login', () => {
  const loginPage = new LoginPage();

  describe('title', () => {
    it('should has correct value', () => {
      loginPage.open();
      loginPage.testTitle();
    });
  });

  describe('screenshot', () => {
    it('should match ', () => {
      loginPage.open();
      loginPage.screenshot();
    });
  });

  describe('refugee account', () => {
    it('should login with remember me true', () => {
      loginPage.open();
      loginPage.login(AccountType.refugee, true);
    });
    it('should login with remember me false', () => {
      loginPage.open();
      loginPage.login(AccountType.refugee, false);
    });
  });

  describe('supporter account', () => {
    it('should login with remember me true', () => {
      loginPage.open();
      loginPage.login(AccountType.supporter, true);
    });
    it('should login with remember me false', () => {
      loginPage.open();
      loginPage.login(AccountType.supporter, false);
    });
  });

});
