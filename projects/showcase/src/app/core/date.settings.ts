/**
 * Date related tokens
 */
import {InjectionToken} from '@angular/core';

export type TrialDateDTOFormat = 'yyyy-MM-dd';
export const trialDateDTOFormat: TrialDateDTOFormat = 'yyyy-MM-dd';
export const trialDateDTOFormatToken = new InjectionToken<TrialDateDTOFormat>('date format for backend');

export type TrialDateFormat = 'yy-mm-dd';
export const trialDateFormat: TrialDateFormat = 'yy-mm-dd';
export const trialDateFormatToken = new InjectionToken<TrialDateFormat>('date format for end users');

export type DatePlaceholderFormat = 'Year/Month/Day';
export const datePlaceholderFormat: DatePlaceholderFormat = 'Year/Month/Day';
export const datePlaceholderFormatToken = new InjectionToken<DatePlaceholderFormat>('date placeholder for input dates');


export const dateProviders = [
  {
    provide: trialDateDTOFormatToken,
    useValue: trialDateDTOFormat,
  },
  {
    provide: trialDateFormatToken,
    useValue: trialDateFormat,
  },
  {
    provide: datePlaceholderFormatToken,
    useValue: datePlaceholderFormat,
  },
];
