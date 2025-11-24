import {
  AssumptionsContactsControls,
  AssumptionsContactsFieldsTitles,
  ColDefTrialContacts,
} from '@assumptions/sections/contacts';
import { InjectionToken } from '@angular/core';

export const contactsFields: AssumptionsContactsFieldsTitles = {
  cdphProjectManager: 'cdphProjectManager',
  assetLead: 'assetLead',
  valueLead: 'valueLead',
  evidenceLead: 'evidenceLead',
  cdol: 'cdol',
  ctl: 'ctl',
  projectMedicalWriter: 'projectMedicalWriter',
  decisionBodyOne: 'decisionBodyOne',
  decisionBodyOneDate: 'decisionBodyOneDate',
  decisionBodyTwo: 'decisionBodyTwo',
  decisionBodyTwoDate: 'decisionBodyTwoDate',
  decisionBodyThree: 'decisionBodyThree',
  decisionBodyThreeDate: 'decisionBodyThreeDate',
  decisionBodyFour: 'decisionBodyFour',
  decisionBodyFourDate: 'decisionBodyFourDate',
  decisionBodyFive: 'decisionBodyFive',
  decisionBodyFiveDate: 'decisionBodyFiveDate',
};
export const contactsControls: AssumptionsContactsControls = {
  cdphProjectManager: {
    name: contactsFields.cdphProjectManager,
    export: true,
    title: 'CDPH Project Manager',
  },
  assetLead: {
    name: contactsFields.assetLead,
    export: true,
    title: 'Asset Lead',
  },
  valueLead: {
    name: contactsFields.valueLead,
    export: true,
    title: 'Value Lead',
  },
  evidenceLead: {
    name: contactsFields.evidenceLead,
    export: true,
    title: 'Evidence Lead',
  },
  cdol: { name: contactsFields.cdol, export: true, title: 'CDOL' },
  ctl: { name: contactsFields.ctl, export: true, title: 'CTL' },
  projectMedicalWriter: {
    name: contactsFields.projectMedicalWriter,
    export: true,
    title: 'Project Medical Writer(PMW)',
  },
  decisionBodyOne: {
    name: contactsFields.decisionBodyOne,
    export: true,
    title: 'Next Decision Body 1',
  },
  decisionBodyOneDate: {
    name: contactsFields.decisionBodyOneDate,
    export: true,
    title: 'Decision Date 1',
  },
  decisionBodyTwo: {
    name: contactsFields.decisionBodyTwo,
    export: true,
    title: 'Next Decision Body 2',
  },
  decisionBodyTwoDate: {
    name: contactsFields.decisionBodyTwoDate,
    export: true,
    title: 'Decision Date 2',
  },
  decisionBodyThree: {
    name: contactsFields.decisionBodyThree,
    export: true,
    title: 'Next Decision Body 3',
  },
  decisionBodyThreeDate: {
    name: contactsFields.decisionBodyThreeDate,
    export: true,
    title: 'Decision Date 3',
  },
  decisionBodyFour: {
    name: contactsFields.decisionBodyFour,
    export: true,
    title: 'Next Decision Body 4',
  },
  decisionBodyFourDate: {
    name: contactsFields.decisionBodyFourDate,
    export: true,
    title: 'Decision Date 4',
  },
  decisionBodyFive: {
    name: contactsFields.decisionBodyFive,
    export: true,
    title: 'Next Decision Body 5',
  },
  decisionBodyFiveDate: {
    name: contactsFields.decisionBodyFiveDate,
    export: true,
    title: 'Decision Date 5',
  },
};
export const contactsControlsToken = new InjectionToken<AssumptionsContactsControls>('Contacts Page Form Fields');

export const contactsFormProviders = [
  {
    provide: contactsControlsToken,
    useValue: contactsControls,
  },
];
export const defTrialContacts: ColDefTrialContacts = {
  cdphProjectManager: undefined,
  assetLead: undefined,
  valueLead: undefined,
  evidenceLead: undefined,
  cdol: undefined,
  ctl: undefined,
  projectMedicalWriter: undefined,
  decisionBodyOne: undefined,
  decisionBodyOneDate: undefined,
  decisionBodyTwo: undefined,
  decisionBodyTwoDate: undefined,
  decisionBodyThree: undefined,
  decisionBodyThreeDate: undefined,
  decisionBodyFour: undefined,
  decisionBodyFourDate: undefined,
  decisionBodyFive: undefined,
  decisionBodyFiveDate: undefined,
};
