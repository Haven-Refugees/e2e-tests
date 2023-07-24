import SupporterHub from "../../pages/supporter.hub";
import {getOfferTypeDisplayName, offersMap, OfferType} from "../../components/DashboardComponent";

describe('As a supporter I want to', () => {
    const supporterHub = new SupporterHub();

    describe('side menu', () => {
        it('should works accordingly to supporter role', () => {
            supporterHub.open();
            supporterHub.performLogin();
            supporterHub.applySideMenuTests();
        });
    });

    describe('dashboard', () => {
        describe('navigation', () => {
            it('should work', () => {
                supporterHub.open();
                supporterHub.performLogin();
                supporterHub.goToDashboard();
            });
        });

        describe.skip('adding offers', () => {
            describe(`add ${getOfferTypeDisplayName(OfferType.Community)} offer`, () => {
                it('should work', () => {
                    supporterHub.addOffer(offersMap.get(OfferType.Community));
                });
            });

            describe(`add ${getOfferTypeDisplayName(OfferType.Family)} offer`, () => {
                it('should work', () => {
                    supporterHub.addOffer(offersMap.get(OfferType.Family));
                });
            });

            describe(`add ${getOfferTypeDisplayName(OfferType.Employment)} offer`, () => {
                it('should work', () => {
                    supporterHub.addOffer(offersMap.get(OfferType.Employment));
                });
            });

            describe(`add ${getOfferTypeDisplayName(OfferType.Housing)} offer`, () => {
                it('should work', () => {
                    supporterHub.addOffer(offersMap.get(OfferType.Housing));
                });
            });

            describe(`add ${getOfferTypeDisplayName(OfferType.Services)} offer`, () => {
                it('should work', () => {
                    supporterHub.addOffer(offersMap.get(OfferType.Services));
                });
            });

            describe(`add ${getOfferTypeDisplayName(OfferType.Household)} offer`, () => {
                it('should work', () => {
                    supporterHub.addOffer(offersMap.get(OfferType.Household));
                });
            });
        });

    });
});
