/**
 * Assumptions Form Field Types and Interfaces
 */

type AssumptionsFieldsNames<Type> = {
  [Property in keyof Type]: string;
};

export type AssumptionsFieldFormControl = 'control';
export type AssumptionsFieldFormArray = 'array';
export type AssumptionsFieldFormType = AssumptionsFieldFormControl | AssumptionsFieldFormArray;
export type AssumptionsFieldBody = {
  name: string;
  export: boolean;
  title: string;
  unit?: string;
  info?: string;
  decimals?: number;
  type?: 'date' | 'number' | 'percentage';
  formType?: AssumptionsFieldFormType;
};

export type AssumptionsFields = { [id: string]: AssumptionsFieldBody };

export type AssumptionsSectionsFields<Type> = {
  [Property in keyof Type]: AssumptionsFieldBody;
};
