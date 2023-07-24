import BaseComponent from './base.component';

export enum OfferType {
  Community = 1,
  Housing = 2,
  Employment = 3,
  Family = 4,
  Household = 5,
  Services = 6
}

export type OfferCreate = {
  offerType: OfferType;
  offerSubType: { [id: number] : string };
  description: string;
}

export class OfferSubType {
  public static Community = {
    1: 'I want to show refugees around my town / city (places to go, best local restaurants, etc.)',
    2: 'I want to welcome refugees at the airport and transport them to their new home',
    3: 'Welcome: I want to meet refugees who are now in my community'
  }
}

export const getOfferTypeDisplayName = (value: unknown) => {
  const indexOfValue = Object.values(OfferType).indexOf(value as unknown as OfferType);
  return Object.keys(OfferType)[indexOfValue];
}
export const offersMap = new Map<OfferType, OfferCreate>();

offersMap.set(OfferType.Community, {
  offerType: OfferType.Community,
  offerSubType: OfferSubType.Community,
  description: 'Lorem Ipsum Community'
});

class DashboardComponent extends BaseComponent {
  constructor() {
    super();
    this.elements = {
      clickable: '.clickable-element',
      offerTypeSelect: '.baTaIaMl select'
    };
  }

  public goToDashboard() {
    cy.get(this.elements.clickable).contains('My Dashboard').click();
    cy.url().should('include', 'dashboard?tab=requests&request=yourrequests');
  }

  public addNewOffer(offerCreate: OfferCreate) {
    cy.get(this.elements.clickable).contains('Add New Offer').click();
    cy.get(this.elements.offerTypeSelect).eq(0).select(offerCreate.offerType);

  }

  public verifyOffer(offerCreate: OfferCreate) {
      throw new Error('Not implemented error');
  }

}

export default DashboardComponent;
