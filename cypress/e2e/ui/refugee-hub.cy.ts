import RefugeeHub from "../../pages/refugee.hub";

describe('As a refugee I want to', () => {
  const refugeeHub = new RefugeeHub();

  describe('side menu', () => {
    it('should works accordingly to refugee role', () => {
      refugeeHub.open();
      refugeeHub.performLogin();
      refugeeHub.applySideMenuTests();
    });
  });
});
