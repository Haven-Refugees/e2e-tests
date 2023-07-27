import BaseComponent from './base.component';

export enum OfferType {
  Community = 'Community',
  Housing = 'Housing',
  Employment = 'Employment',
  Family = 'Family',
  Household = 'Household',
  Services = 'Services'
}

interface HostParameters {
  howManyPeopleCanYouHost: number;
  areYouAvailableToHostForAtLeastForOneMonth: string;
}

interface EmploymentParameters {
  canOfferThisHelpRemotelyCheckboxLabel: string;
  canOfferThisHelpRemotelyCheckboxValue: boolean;
  canHelpMultiplePeopleCheckboxLabel: string;
  canHelpMultiplePeopleCheckboxValue: boolean;
}

interface ServiceParameters {
  canOfferThisHelpRemotelyCheckboxLabel: string;
  canOfferThisHelpRemotelyCheckboxValue: boolean;
  canHelpMultiplePeopleCheckboxLabel: string;
  canHelpMultiplePeopleCheckboxValue: boolean;
}

export type OfferCreate = {
  offerType: OfferType;
  offerSubTypeIndex: number;
  offerSubTypeValue: string,
  description: string;
  hostParameters?: HostParameters;
  employmentParameters?: EmploymentParameters;
  serviceParameters?: ServiceParameters;
}

export const getOfferTypeDisplayName = (value: unknown) => {
  const indexOfValue = Object.values(OfferType).indexOf(value as unknown as OfferType);
  return Object.keys(OfferType)[indexOfValue];
}
export const offersMap = new Map<OfferType, OfferCreate[]>();

offersMap.set(OfferType.Community, [
  {
    offerType: OfferType.Community,
    offerSubTypeIndex: 1,
    offerSubTypeValue: 'I want to show refugees around my town / city (places to go, best local restaurants, etc.)',
    description: 'OfferType.Community-1'
  },
  {
    offerType: OfferType.Community,
    offerSubTypeIndex: 2,
    offerSubTypeValue: 'I want to welcome refugees at the airport and transport them to their new home',
    description: 'OfferType.Community-2'
  },
  {
    offerType: OfferType.Community,
    offerSubTypeIndex: 3,
    offerSubTypeValue: 'Welcome: I want to meet refugees who are now in my community',
    description: 'OfferType.Community-3'
  }
]);

offersMap.set(OfferType.Housing, [
  {
    offerType: OfferType.Housing,
    offerSubTypeIndex: 1,
    offerSubTypeValue: 'I can give advice to refugees deciding where in Canada to live',
    description: 'OfferType.Housing-1'
  },
  {
    offerType: OfferType.Housing,
    offerSubTypeIndex: 2,
    offerSubTypeValue: 'I can help refugees look for housing in my town / city that is open to refugees',
    description: 'OfferType.Housing-2'
  },
  {
    offerType: OfferType.Housing,
    offerSubTypeIndex: 3,
    offerSubTypeValue: 'Host: I can host a refugee for their first month in Canada',
    description: 'OfferType.Housing-3',
    hostParameters: {
      howManyPeopleCanYouHost: 5,
      areYouAvailableToHostForAtLeastForOneMonth: "Yes, I can host for at least one month"
    }
  }
]);

offersMap.set(OfferType.Employment, [
  {
    offerType: OfferType.Employment,
    offerSubTypeIndex: 1,
    offerSubTypeValue: 'Mentor: I can help refugees recruiting for my industry',
    description: 'OfferType.Employment-1'
  },
  {
    offerType: OfferType.Employment,
    offerSubTypeIndex: 2,
    offerSubTypeValue: 'Recruit: I have a job posting that is open to refugees',
    description: 'OfferType.Employment-2'
  },
  {
    offerType: OfferType.Employment,
    offerSubTypeIndex: 3,
    offerSubTypeValue: 'I can help a refugee improve their resume',
    description: 'OfferType.Employment-3',
    employmentParameters: {
      canHelpMultiplePeopleCheckboxLabel: "I can help multiple people with this offer",
      canHelpMultiplePeopleCheckboxValue: true,
      canOfferThisHelpRemotelyCheckboxLabel: "I can offer this help remotely if needed",
      canOfferThisHelpRemotelyCheckboxValue: true
    }
  }
]);

offersMap.set(OfferType.Family, [
  {
    offerType: OfferType.Family,
    offerSubTypeIndex: 1,
    offerSubTypeValue: 'I can help tutor refugee children in their schoolwork',
    description: 'OfferType.Family-1'
  },
  {
    offerType: OfferType.Family,
    offerSubTypeIndex: 2,
    offerSubTypeValue: 'I can help arrange playdates between my children and refugee children',
    description: 'OfferType.Family-2'
  },
  {
    offerType: OfferType.Family,
    offerSubTypeIndex: 3,
    offerSubTypeValue: 'I can help refugees find a good local school for their children',
    description: 'OfferType.Family-3'
  },
  {
    offerType: OfferType.Family,
    offerSubTypeIndex: 4,
    offerSubTypeValue: 'I can help refugees with childcare (babysitting for short periods)',
    description: 'OfferType.Family-4'
  },
]);

offersMap.set(OfferType.Household, [
  {
    offerType: OfferType.Household,
    offerSubTypeIndex: 1,
    offerSubTypeValue: 'I can offer non-furniture items for free / a low price (clothing, toys, kitchen items, bikes, etc.)',
    description: 'OfferType.Household-1'
  },
  {
    offerType: OfferType.Household,
    offerSubTypeIndex: 2,
    offerSubTypeValue: 'Furnish: I can offer refugees furniture for free / a low price',
    description: 'OfferType.Household-2'
  },
]);

offersMap.set(OfferType.Services, [
  {
    offerType: OfferType.Services,
    offerSubTypeIndex: 1,
    offerSubTypeValue: 'Practice Language: I want to help refugees practice English / French by speaking with them',
    description: 'OfferType.Services-2'
  },
  {
    offerType: OfferType.Services,
    offerSubTypeIndex: 2,
    offerSubTypeValue: 'I have a car and can help refugees with transportation',
    description: 'OfferType.Services-2'
  },
  {
    offerType: OfferType.Services,
    offerSubTypeIndex: 3,
    offerSubTypeValue: 'I can help a refugee find a local doctor, dentist, or other medical professional',
    description: 'OfferType.Services-3'
  },
  {
    offerType: OfferType.Services,
    offerSubTypeIndex: 4,
    offerSubTypeValue: 'I can help refugees find mental health counseling',
    description: 'OfferType.Services-4'
  },
  {
    offerType: OfferType.Services,
    offerSubTypeIndex: 5,
    offerSubTypeValue: 'I can help refugees decide which bank to use in Canada',
    description: 'OfferType.Services-5'
  },
  {
    offerType: OfferType.Services,
    offerSubTypeIndex: 6,
    offerSubTypeValue: 'I need a translator to help speak with a refugee',
    description: 'OfferType.Services-6',
    serviceParameters: {
      canHelpMultiplePeopleCheckboxLabel: "I can help multiple people with this offer",
      canHelpMultiplePeopleCheckboxValue: true,
      canOfferThisHelpRemotelyCheckboxLabel: "I can offer this help remotely if needed",
      canOfferThisHelpRemotelyCheckboxValue: true
    }
  },
]);

class DashboardComponent extends BaseComponent {
  constructor() {
    super();
    this.elements = {
      clickable: '.clickable-element',
      bubbleElement: '.bubble-element',
      offerTypeSelect: '.baTaIaMl select',
      textarea: 'textarea.bubble-element',
      submit: '.baTaIaMr',
      popupElement: '.Popup'
    };
  }

  public goToDashboard() {
    cy.get(this.elements.clickable).contains('My Dashboard').click();
    cy.url().should('include', 'dashboard?tab=requests&request=yourrequests');
  }

  public addNewOffer(offerCreate: OfferCreate) {
    cy.get(this.elements.clickable).contains('Add New Offer').click();
    cy.waitForStableDOM({ pollInterval: 1000, timeout: 10000 });

    cy.contains(this.elements.bubbleElement, 'Offer Type')
        .select(offerCreate.offerType, {
          log: true,
          timeout: 5000,
        });

    cy.waitForStableDOM({ pollInterval: 1000, timeout: 10000 });

    cy.contains(this.elements.bubbleElement, 'Select One')
        .select(offerCreate.offerSubTypeValue, {
          log: true,
          timeout: 5000,
        });
    cy.get(this.elements.textarea).type(offerCreate.description);

    cy.wait(500);
    cy.get(this.elements.clickable).contains('Post').click();
    cy.wait(500);
  }

  public verifyOffer(offerCreate: OfferCreate) {
    cy.waitForStableDOM({ pollInterval: 1000, timeout: 10000 });

    const element = cy.get(this.elements.bubbleElement).contains(offerCreate.description);
    element.should('be.visible');
    element.parent().screenshot(`${offerCreate.description}`)
    cy.wait(500);
  }

  public editOffer(offerCreate: OfferCreate) {
    const element = cy.get(this.elements.bubbleElement).contains(offerCreate.description);
    element.should('be.visible');
    element.parent().parent().contains('Edit').click();
    cy.wait(500);

    const newDescription = `${offerCreate.description}-edited`;
    cy.get(this.elements.popupElement)
        .children("textarea")
        .clear()
        .type(newDescription);

    const body = cy.get(this.elements.popupElement);
    body.contains("Save").parent().screenshot(`${newDescription}`);
    body.contains("Save").click();
    cy.wait(500);
  }

  public withdrawEditedOffer(offerCreate: OfferCreate) {
    const editedDescription = `${offerCreate.description}-edited`;
    const element = cy.get(this.elements.bubbleElement).contains(editedDescription);
    element.should('be.visible');
    element.parent().parent().contains('Withdraw').click();
    cy.wait(500);
    const body = cy.get(this.elements.bubbleElement).contains(editedDescription);
    body.should('not.be.visible');
    cy.wait(500);
  }

}

export default DashboardComponent;
