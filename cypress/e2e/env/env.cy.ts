
describe('As a developer I want to ensure that Cypress environment has correct setup', () => {

  describe('supporter account', () => {
    const { supporter } = Cypress.env('accounts');

    it('has login to use', () => {
      expect(supporter.login).to.be.a('string');
    });

    it('has password to use', () => {
      expect(supporter.password).to.be.a('string');
    });
  });

  describe('refugee account', () => {
    const { refugee } = Cypress.env('accounts');

    it('has login to use', () => {
      expect(refugee.login).to.be.a('string');
    });

    it('has password to use', () => {
      expect(refugee.password).to.be.a('string');
    });
  });

  describe('admin account', () => {
    const { admin } = Cypress.env('accounts');

    it('has login to use', () => {
      expect(admin.login).to.be.a('string');
    });

    it('has password to use', () => {
      expect(admin.password).to.be.a('string');
    });
  });

});
