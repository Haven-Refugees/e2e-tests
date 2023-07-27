import SupporterHub from "../../pages/supporter.hub";
import { getOfferTypeDisplayName, offersMap, OfferType } from "../../components/DashboardComponent";

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

        describe('offers', () => {
            Object.values(OfferType).forEach((offerType) => {
                const communityOffers = offersMap.get(offerType);
                communityOffers.forEach((offer) => {
                    it(`should add, verify, edit and withdraw ${offer.offerSubTypeValue}`, () => {
                        supporterHub.open();
                        supporterHub.performLogin();
                        supporterHub.goToDashboard();
                        supporterHub.addNewOffer(offer);
                        supporterHub.verifyOffer(offer);
                        supporterHub.editOffer(offer);
                        supporterHub.withdrawEditedOffer(offer);
                    });
                });
            });
        });

    });
});
