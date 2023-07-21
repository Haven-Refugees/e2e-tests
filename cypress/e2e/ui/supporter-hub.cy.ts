import SupporterHub from "../../pages/supporter.hub";

describe('As a supporter I want to', () => {
  const supporterHub = new SupporterHub();

  describe('side menu', () => {
    it('should works accordingly to supporter role', () => {
      supporterHub.open();
      supporterHub.performLogin();
      supporterHub.applySideMenuTests();
    });
  });
});
