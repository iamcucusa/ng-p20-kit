import { InjectionToken } from '@angular/core';
import {
  ColDefTrialReference,
  TrialReferenceControls,
  TrialReferenceFieldsTitles,
} from '@assumptions/sections/reference';

export const referenceFields: TrialReferenceFieldsTitles = {
  ntcCompetitor: 'ntcCompetitor',
  ctmsReference: 'ctmsReference',
};
export const referenceControls: TrialReferenceControls = {
  ntcCompetitor: {
    name: referenceFields.ntcCompetitor,
    export: true,
    title: 'NCT Competitor Trial',
  },
  ctmsReference: {
    name: referenceFields.ctmsReference,
    export: true,
    title: 'CTMS Reference Trial',
  },
};
export const referenceControlsToken = new InjectionToken<TrialReferenceControls>('Referece Page Form Fields');

export const referenceFormProviders = [
  {
    provide: referenceControlsToken,
    useValue: referenceControls,
  }
];
export const defTrialReference: ColDefTrialReference = {
  ctmsReference: undefined,
  ntcCompetitor: undefined,
};
